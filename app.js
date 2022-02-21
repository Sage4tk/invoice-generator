const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib;

//get and add text to pdf
const editPDF = async () => {
    //fetch pdf online
    const pdfFile = await fetch("https://tttimboltestbucket.s3.ap-south-1.amazonaws.com/invoice.pdf").then(res = res.arrayBuffer());

    //load pdf to editor
    const pdfDoc = await PDFDocument.load(pdfFile);

    //import font
    const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    //get first page
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    //get width and height
    const { width, height } = firstPage.getSize();

    
}