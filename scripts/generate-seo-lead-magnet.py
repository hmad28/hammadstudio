from pathlib import Path
from shutil import copyfile

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "checklist-revamp-website-perusahaan.pdf"
PUBLIC = ROOT / "public" / "downloads" / "checklist-revamp-website-perusahaan.pdf"
LOGO = ROOT / "src" / "app" / "icon.png"

NAVY = colors.HexColor("#070A12")
PURPLE = colors.HexColor("#8057FF")
ACID = colors.HexColor("#D2F34C")
INK = colors.HexColor("#17181D")
MUTED = colors.HexColor("#626675")
PAPER = colors.HexColor("#F7F5EF")
LINE = colors.HexColor("#D9D8D2")


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(colors.HexColor("#D9D8D2"))
    canvas.line(18 * mm, 16 * mm, 192 * mm, 16 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawString(18 * mm, 10 * mm, "HAMMAD.STUDIO - Checklist Revamp Website Perusahaan")
    canvas.drawRightString(192 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


class ChecklistDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(filename, pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=18 * mm, bottomMargin=22 * mm)
        frame = Frame(self.leftMargin, self.bottomMargin, self.width, self.height, id="content")
        self.addPageTemplates(PageTemplate(id="main", frames=[frame], onPage=footer))


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverKicker", fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ACID, tracking=1.2, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="CoverTitle", fontName="Helvetica-Bold", fontSize=31, leading=33, textColor=colors.white, alignment=TA_CENTER, spaceAfter=12))
styles.add(ParagraphStyle(name="CoverBody", fontName="Helvetica", fontSize=11, leading=17, textColor=colors.HexColor("#CDD0DA"), alignment=TA_CENTER))
styles.add(ParagraphStyle(name="SectionKicker", fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=PURPLE, tracking=1.1, spaceAfter=8))
styles.add(ParagraphStyle(name="SectionTitle", fontName="Helvetica-Bold", fontSize=23, leading=26, textColor=INK, spaceAfter=10))
styles.add(ParagraphStyle(name="BodyHS", fontName="Helvetica", fontSize=10, leading=15.5, textColor=MUTED, spaceAfter=10))
styles.add(ParagraphStyle(name="ItemHS", fontName="Helvetica", fontSize=9.4, leading=13.5, textColor=INK))
styles.add(ParagraphStyle(name="SmallHS", fontName="Helvetica", fontSize=8.3, leading=12, textColor=MUTED))
styles.add(ParagraphStyle(name="CalloutHS", fontName="Helvetica-Bold", fontSize=11, leading=16, textColor=INK))


SECTIONS = [
    ("01", "Business & positioning", "Pastikan redesign memecahkan masalah bisnis, bukan hanya mengganti tampilan.", [
        "Tujuan redesign ditulis dalam satu kalimat yang dapat diuji.",
        "Audiens utama dan secondary audience sudah didefinisikan.",
        "Value proposition terbaru sudah disepakati stakeholder.",
        "Layanan, produk, industri, dan area operasi masih akurat.",
        "CTA utama ditentukan: inquiry, RFQ, booking, download, atau purchase.",
        "KPI mencakup qualified lead, proposal, deal, dan revenue - bukan traffic saja.",
    ]),
    ("02", "Content & information architecture", "Pertahankan content yang bernilai, rapikan hierarchy, dan tutup gap yang menghambat keputusan.", [
        "Seluruh URL lama sudah diinventarisasi melalui crawl atau sitemap.",
        "Halaman dengan traffic, backlink, lead, atau ranking sudah ditandai.",
        "Sitemap baru mengikuti layanan dan pertanyaan customer.",
        "Setiap halaman memiliki satu H1 dan tujuan yang jelas.",
        "Service page menjelaskan masalah, solusi, deliverable, proof, harga, FAQ, dan CTA.",
        "Case study menjelaskan challenge, solution, deliverable, screenshot, dan outcome nyata.",
        "Owner dan deadline untuk copy, foto, dokumen, serta approval sudah ditetapkan.",
    ]),
    ("03", "SEO migration", "Redesign yang mengabaikan URL lama dapat menghilangkan equity pencarian yang sudah dibangun.", [
        "Setiap URL lama dipetakan ke URL baru yang paling relevan.",
        "Redirect 301 diuji dan tidak membentuk chain atau loop.",
        "Title, description, canonical, robots, dan sitemap sudah diverifikasi.",
        "Structured data sesuai dengan content yang terlihat.",
        "Internal link menggunakan anchor yang deskriptif.",
        "404, soft 404, duplicate canonical, dan noindex tidak sengaja sudah diperiksa.",
        "Search Console dan analytics tetap menggunakan property yang benar.",
    ]),
    ("04", "UX, conversion & accessibility", "Website harus mudah digunakan, dipahami, dan diukur pada perangkat nyata.", [
        "Navigasi dan CTA bekerja pada mobile, keyboard, dan layar besar.",
        "Form memiliki label, validation, error state, success state, dan routing yang benar.",
        "Nomor telepon, email, WhatsApp, alamat, dan jam operasional konsisten.",
        "Klik WhatsApp, form, download, RFQ, checkout, dan purchase dilacak sebagai event.",
        "Image memiliki ukuran stabil, alt text deskriptif, dan format efisien.",
        "Kontras, focus state, heading hierarchy, dan target sentuh sudah diperiksa.",
        "Tidak ada testimonial, logo, rating, atau angka yang tidak dapat diverifikasi.",
    ]),
    ("05", "Performance & security", "Kecepatan dan keamanan adalah proses engineering, bukan badge marketing.", [
        "LCP image diprioritaskan tanpa mem-preload asset yang tidak perlu.",
        "JavaScript pihak ketiga ditunda dan hanya dimuat jika digunakan.",
        "LCP, INP, CLS, TTFB, dan error dipantau setelah launch.",
        "HTTPS, security headers, secret management, dependency, dan input validation diperiksa.",
        "Authentication, authorization, session, API, upload file, dan rate limit diuji bila relevan.",
        "Backup tersedia dan prosedur restore pernah diuji.",
        "Domain, DNS, hosting, repository, CMS, dan analytics memiliki owner yang jelas.",
    ]),
    ("06", "Launch & 30-day monitoring", "Peluncuran adalah awal periode validasi, bukan akhir project.", [
        "Smoke test dilakukan setelah DNS atau deployment production aktif.",
        "Redirect, form, download, email, WhatsApp, dan analytics diuji di production.",
        "Sitemap dikirim ulang dan URL prioritas diperiksa di Search Console.",
        "Index coverage, Core Web Vitals, crawl error, dan conversion dipantau mingguan.",
        "Baseline sebelum redesign disimpan agar perbandingan menggunakan periode yang setara.",
        "Backlog improvement dibuat dari data dan feedback, bukan asumsi.",
        "PIC maintenance, response time, dan escalation path sudah disepakati.",
    ]),
]


def checklist_table(items):
    rows = []
    for item in items:
        rows.append([Paragraph("□", styles["ItemHS"]), Paragraph(item, styles["ItemHS"])])
    table = Table(rows, colWidths=[8 * mm, 160 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BOX", (0, 0), (-1, -1), 0.35, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE),
        ("BACKGROUND", (0, 0), (-1, -1), colors.white),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)
    doc = ChecklistDoc(str(OUTPUT))
    story = []

    cover = Table([[Image(str(LOGO), width=42 * mm, height=42 * mm)]], colWidths=[174 * mm], rowHeights=[52 * mm])
    cover.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("VALIGN", (0, 0), (-1, -1), "MIDDLE")]))
    story.extend([cover, Spacer(1, 16 * mm)])
    title_block = Table([[
        Paragraph("HAMMAD.STUDIO / B2B GUIDE", styles["CoverKicker"]),
    ], [
        Paragraph("Checklist Revamp<br/>Website Perusahaan", styles["CoverTitle"]),
    ], [
        Paragraph("Panduan praktis untuk memeriksa business goal, content, SEO migration, conversion, performance, security, dan launch sebelum website lama diganti.", styles["CoverBody"]),
    ]], colWidths=[174 * mm])
    title_block.setStyle(TableStyle([("BACKGROUND", (0, 0), (-1, -1), NAVY), ("LEFTPADDING", (0, 0), (-1, -1), 16 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 16 * mm), ("TOPPADDING", (0, 0), (-1, -1), 8), ("BOTTOMPADDING", (0, 0), (-1, -1), 8)]))
    story.extend([title_block, Spacer(1, 13 * mm), Paragraph("Gunakan checklist ini bersama tim marketing, management, procurement, dan technical owner. Centang hanya setelah bukti atau keputusan tersedia.", styles["CalloutHS"]), PageBreak()])

    for index, (number, title, intro, items) in enumerate(SECTIONS):
        story.extend([
            Paragraph(f"SECTION {number}", styles["SectionKicker"]),
            Paragraph(title, styles["SectionTitle"]),
            Paragraph(intro, styles["BodyHS"]),
            Spacer(1, 3 * mm),
            checklist_table(items),
            Spacer(1, 9 * mm),
            KeepTogether([
                Paragraph("Catatan / keputusan", styles["SectionKicker"]),
                Table([[""], [""]], colWidths=[174 * mm], rowHeights=[17 * mm, 17 * mm], style=TableStyle([("BOX", (0, 0), (-1, -1), 0.35, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE), ("BACKGROUND", (0, 0), (-1, -1), colors.white)])),
            ]),
        ])
        if index < len(SECTIONS) - 1:
            story.append(PageBreak())

    story.extend([PageBreak(), Paragraph("DECISION SUMMARY", styles["SectionKicker"]), Paragraph("Keputusan sebelum project dimulai", styles["SectionTitle"]), Paragraph("Isi bersama stakeholder agar scope, ownership, dan ukuran keberhasilan tidak berubah tanpa proses yang jelas.", styles["BodyHS"])])
    summary_rows = [[Paragraph(label, styles["ItemHS"]), ""] for label in ["Tujuan utama", "Audiens utama", "CTA utama", "URL paling bernilai", "PIC content", "PIC approval", "Target launch", "KPI 30/60/90 hari"]]
    summary = Table(summary_rows, colWidths=[45 * mm, 129 * mm], rowHeights=[18 * mm] * len(summary_rows))
    summary.setStyle(TableStyle([("BOX", (0, 0), (-1, -1), 0.35, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.35, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("BACKGROUND", (0, 0), (0, -1), colors.HexColor("#EEE9FF")), ("LEFTPADDING", (0, 0), (-1, -1), 8)]))
    story.extend([summary, Spacer(1, 12 * mm), Paragraph("Butuh audit atau estimasi revamp?", styles["SectionTitle"]), Paragraph("Kunjungi hammad.studio/redesign-website atau kirim brief ke hello@hammad.studio. Scope, risiko migrasi, timeline, dan biaya dijelaskan sebelum build dimulai.", styles["BodyHS"])])

    doc.build(story)
    copyfile(OUTPUT, PUBLIC)
    print(OUTPUT)
    print(PUBLIC)


if __name__ == "__main__":
    build()
