import { Alert } from 'react-native';
import * as Print from 'expo-print';

const formatHTML = (keys: string[], rows: any[], title: string) => {
  const isMotor = keys.includes('Output (KW)');
  const isSingle = isMotor && rows.length === 1;
  
  let bodyContent = '';
  if (isMotor) {
    bodyContent = rows.map(r => {
      const brand = r['Brand'] || '';
      const isSiemens = brand.toLowerCase() === 'siemens';
      const typeClass = isSiemens ? 'siemens' : 'crompton';
      
      const hasFlange = r['Flange Added'] === 'Yes';
      const flangeRow = hasFlange ? `
        <div class="row">
          <span class="label">Flange</span>
          <span class="badge ${typeClass}">+₹${r['Flange Price (Rs)'] || '0'} Added</span>
        </div>` : '';
        
      const hasAddon = r['Add-On Applied'] && r['Add-On Applied'] !== 'No';
      const addonRow = hasAddon ? `
        <div class="row">
          <span class="label">Add-On Applied</span>
          <span class="badge ${typeClass}">${r['Add-On Applied']}</span>
        </div>` : '';

      return `
        <div class="card">
          <div class="card-header">
            <span class="card-type ${typeClass}">${r['Type']}</span>
            <span class="card-frame">${r['Poles']}P • Frame ${r['Frame']}</span>
          </div>
          <div class="output-title">${r['Output (KW)']} KW / ${r['Output (HP)']} HP</div>
          <div class="base-price">Base: ₹${r['Base Price (Rs)']}</div>
          
          <div class="separator"></div>
          
          ${flangeRow}
          ${addonRow}
          
          <div class="row">
            <span class="label">Discount (%)</span>
            <span class="discount-val">${r['Discount (%)']}</span>
          </div>
          
          <div class="separator"></div>
          
          <div class="final-container">
            <span class="final-label">Final Price</span>
            <div class="final-value-wrapper">
              <div class="final-amount">₹${r['Final Price (Rs)']}</div>
              ${r['Discount (%)'] !== '0.00%' ? `<div class="discount-text ${typeClass}">Discount Applied</div>` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  } else {
    const head = keys.map(k => `<th>${k}</th>`).join('');
    const body = rows.map(r => `<tr>${keys.map(k => `<td>${r[k] || ''}</td>`).join('')}</tr>`).join('');
    bodyContent = `
      <table>
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    `;
  }

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="color-scheme" content="light only" />
        <style>
          @page { margin: 15mm; size: auto; }
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: ${isSingle ? '16px' : '20px'}; background: ${isSingle ? '#fff' : '#f5f7fa'}; margin: 0; box-sizing: border-box; }
          h1 { display: ${isSingle ? 'none' : 'block'}; color: #193f66; text-align: center; margin-top: 20px; margin-bottom: 24px; font-weight: 800; font-size: 24px; }
          .card { background: #fff; border: ${isSingle ? '1px solid #e0e0e0' : '1px solid #e0e0e0'}; border-radius: ${isSingle ? '12px' : '12px'}; padding: 24px; margin-bottom: ${isSingle ? '0' : '20px'}; box-shadow: ${isSingle ? 'none' : '0 4px 12px rgba(0,0,0,0.05)'}; page-break-inside: avoid; break-inside: avoid; max-width: ${isSingle ? '100%' : '600px'}; margin-left: auto; margin-right: auto; box-sizing: border-box; }
          .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
          .card-type { font-size: 16px; font-weight: bold; }
          .card-type.siemens { color: #981b22; }
          .card-type.crompton { color: #193f66; }
          .card-frame { font-size: 14px; color: #666; }
          .output-title { font-size: 22px; font-weight: 800; color: #1a1a1a; margin-bottom: 6px; }
          .base-price { font-size: 16px; color: #666; margin-bottom: 20px; }
          .separator { height: 1px; background: #e0e0e0; margin: 20px 0; }
          .row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; font-size: 16px; }
          .label { font-weight: 600; color: #1a1a1a; }
          .badge { padding: 6px 12px; border-radius: 6px; font-size: 14px; font-weight: bold; border: 1px solid; }
          .badge.siemens { background: #fcebeb; color: #981b22; border-color: #f5c4c4; }
          .badge.crompton { background: #e8eff5; color: #193f66; border-color: #c4d7e6; }
          .discount-val { font-size: 16px; font-weight: bold; padding: 8px 16px; border: 1px solid #193f66; border-radius: 8px; color: #193f66; }
          .final-container { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 10px; }
          .final-label { font-size: 18px; font-weight: 700; color: #1a1a1a; margin-bottom: 4px; }
          .final-value-wrapper { text-align: right; }
          .final-amount { font-size: 32px; font-weight: 900; color: #1a1a1a; line-height: 1; margin-bottom: 4px; }
          .discount-text { font-size: 12px; font-weight: 700; }
          .discount-text.siemens { color: #193f66; }
          .discount-text.crompton { color: #981b22; }
          
          /* Fallback table */
          table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 12px; }
          th, td { border: 1px solid #E0E0E0; padding: 10px 8px; text-align: left; background: #fff; }
          th { background-color: #F5F7FA; font-weight: bold; color: #193f66; text-transform: uppercase; font-size: 10px; letter-spacing: 0.5px; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        ${bodyContent}
      </body>
    </html>
  `;
};

export const exportToPDFMobile = async (title: string, rows: object[]) => {
  if (!rows || rows.length === 0) {
    Alert.alert('Export Error', 'No data to export!');
    return;
  }

  const keys = Object.keys(rows[0]);
  const html = formatHTML(keys, rows, title);

  try {
    if (typeof window !== 'undefined' && window.document) {
      // Create or locate the hidden iframe to isolate print context
      let iframe = window.document.getElementById('expo-print-iframe') as HTMLIFrameElement;
      if (!iframe) {
        iframe = window.document.createElement('iframe');
        iframe.id = 'expo-print-iframe';
        iframe.style.position = 'absolute';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        iframe.style.visibility = 'hidden';
        window.document.body.appendChild(iframe);
      }

      const doc = iframe.contentWindow?.document || iframe.contentDocument;
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();

        // Allow some time for rendering before launching print dialog
        setTimeout(() => {
          if (iframe.contentWindow) {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
          }
        }, 300);
      } else {
        throw new Error('Iframe document not accessible');
      }
    } else {
      // Fallback
      await Print.printAsync({ html });
    }
  } catch (error) {
    console.error('Error exporting PDF on web:', error);
    Alert.alert('Export Error', 'An error occurred while generating the PDF file.');
  }
};
