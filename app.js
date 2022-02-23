const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

const inputs = document.querySelectorAll('input')

//get and add text to pdf
const editPDF = async () => {
    //fetch pdf online
    const pdfFile = await fetch("https://tttimboltestbucket.s3.ap-south-1.amazonaws.com/invoice.pdf").then(res => res.arrayBuffer());

    //load pdf to editor
    const pdfDoc = await PDFDocument.load(pdfFile);

    //import font
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    //get first page
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    //get width and height
    const { width, height } = firstPage.getSize();
    
    //add upper text
    firstPage.drawText(inputs[0].value, {
        x:135,
        y: height - 227.5,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText(inputs[1].value, {
        x:401,
        y: height - 227.5,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    //add middle texts
    firstPage.drawText("Mr. Joel Timbol", {
        x:90,
        y: height - 300,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText("056-4770803", {
        x:width/ 1.9,
        y: height - 300,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    //lower table height 521
    firstPage.drawText("Monthly", {
        x:426,
        y: height - 521,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText("2000/-", {
        x:483,
        y: height - 521,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    //lower table

    firstPage.drawText("2000/-", {
        x:483,
        y: height - 606,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText("Two Thousand AED ONLY", {
        x:261,
        y: height - 606,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText(inputs[2].value, {
        x:261,
        y: height - 521,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    firstPage.drawText(inputs[3].value, {
        x:343,
        y: height - 521,
        size: 12,
        font,
        color: rgb(0,0,0)
    });

    const pdfBytes = await pdfDoc.save();

    //download
    download(pdfBytes, "invoice.pdf", "application/pdf");

}

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    editPDF();
}