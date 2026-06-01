const XLSX = require("xlsx");
const wb = XLSX.readFile("C:/Users/Saravanan/Downloads/Siemens Price list 2026 PRICING AFTER EDITING.xlsx");
const sheet = wb.Sheets[wb.SheetNames[0]];
if(!sheet) console.error("No sheet found");
const rows = XLSX.utils.sheet_to_json(sheet, {header: 1});

console.log("Total rows:", rows.length);
let found = 0;
rows.forEach((r, i) => {
    // try to find where KW is 55
    if (r.some(cell => String(cell).includes("55"))) {
        console.log("Row", i, "->", JSON.stringify(r));
        found++;
    }
});
if (found > 0) {
    console.log("Found 55kw rows.");
} else {
    console.log("Could not find '55' in any row.");
}
