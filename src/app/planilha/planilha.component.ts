import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { jsPDF} from "jspdf";
import { Nunito } from 'src/assets/fonts'
import autoTable from 'jspdf-autotable';
import { style } from '@angular/animations';


@Component({
  selector: 'app-planilha',
  templateUrl: './planilha.component.html',
  styleUrls: ['./planilha.component.scss']
})
export class PlanilhaComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  //Gerar PDF
  @ViewChild('content',{static:false}) el!: ElementRef
  title = 'Cronograma de Execução';
  
  generatePDF(){
  
    let doc = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      hotfixes: ["px_scaling"] 
    });

    //LOGO img
    // (dist horizontal LEFT, dist vertical TOP, width, height)
    doc.addImage("assets/Logo2.png", "PNG", 65, 20, 80,80);  

    //TITULO img
    doc.addImage("assets/Logo.png", "PNG", 420, 10, 290, 80);

    //CONTEÚDO 1ª TABELA:

    //NOME FANTASIA
    autoTable(doc, {
      body: [
        [ 
          {content: 'Nome de Fantasia:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'ENERGIN TECNOLOGIA E INOVAÇÃO DA AMAZÔNIA', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 115, //+25
      theme: 'grid',
    })

    //RAZÃO SOCIAL
    autoTable(doc, {
      body: [
        [
          {content: 'Razão Social:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'ENERGIN DA AMAZONIA LTDA', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 140,
      theme: 'grid',
    })
    
    //CNPJ & OPTANTE
    autoTable(doc, {
      body: [
        [ 
          {content: 'CNPJ:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: '05.682.859/0001-41', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
          {content: 'Optante pelo SIMPLES?', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: '(NÃO)', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 165,
      theme: 'grid',
    })

    //ENDEREÇO
    autoTable(doc, {
      body: [
        [ 
          {content: 'Endereço:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'Rua Professor Castelo Branco, n. 05, Conjunto Jardim Yolanda', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 190,
      theme: 'grid',
    })

    //BAIRRO & CIDADE
    autoTable(doc, {
      body: [
        [ 
          {content: 'Bairro:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'Parque Dez de Novembro', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
          {content: 'Cidade:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'Manaus', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 215,
      theme: 'grid',
    })

    //CEP & EMAIL
    autoTable(doc, {
      body: [
        [ 
          {content: 'CEP:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: '69055-090', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
          {content: 'E-mail:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'energin.amazonia@gmail.com', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 240,
      theme: 'grid',
    })

     //TELEFONE
     autoTable(doc, {
      body: [
        [ 
          {content: 'Telefone:', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: '(92) 3232-7651', styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 265,
      theme: 'grid',
    })

     //TÍTULO CENTRAL
     autoTable(doc, {
      body: [
        [ 
          {content: 'PLANILHA ORÇAMENTÁRIA', styles: {fontSize: 12, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'center', textColor: [255,255,255], fillColor: '#404040'}}, 
        ]
      ],
      startY: 290,
      theme: 'grid',
    })
    
    //INFORMAÇÕES:
    autoTable(doc, {
     head: [
      [
        {content: 'ID', styles: {fontSize: 10, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF'}}, 
        {content: 'ESCOLA', styles: {fontSize: 10, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF'}}, 
        {content: 'OS', styles: {fontSize: 10, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF'}}, 
        {content: 'DATA DE EXECUÇÃO', styles: {fontSize: 10, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF'}}, 
        {content: 'VALOR', styles: {fontSize: 10, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF'}}, 
      ]
     ],
     body: [
       [ 
        
       ]
     ],
     startY: 320,
     theme: 'grid',
   })

    //TOTAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'TOTAL', styles: {fontSize: 12, fontStyle: 'bold', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, valign: 'middle', halign: 'center'}}, 
          {content: 'R$', styles: {fontSize: 12, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:1, bottom:1}, valign: 'middle', halign: 'center'}}, 
          {content: 'duzentos e quarenta e dois mil, novecentos e dezessete reais e setenta e nove centavos', 
          styles: {fontSize: 8, fontStyle: 'bold', lineColor: false, lineWidth:{right: 1, top: 1, left:1, bottom:1}, cellWidth: 200}}, 
        ]
      ],
      startY: 390,
      theme: 'grid',
    })

    doc.addImage('assets/assinatura.png', 'PNG', 280,525,680,170);
    //FOOTER
    doc.setTextColor(0, 32, 96);
    doc.addFileToVFS("Nunito.ttf", Nunito);
    doc.addFont("Nunito.ttf", "Nunito", "Normal");
    doc.setFontSize(7.3);
    doc.text('CNPJ: 05.682.859/0001-41', 65, 737);
    doc.text('Telefone: (92) 3232-7652', 65, 753);
    doc.text('E-mail: energin.amazonia@gmail.com', 65, 771);
    doc.text('Endereço: Rua Professor Castelo Branco, nº 5, Conj. Jardim Yolanda, Parque 10 de Novembro.', 65, 788);

    //EXPORTAR
    //doc.save("Cronograma-de-Execução.pdf");
    window.open(doc.output('bloburl'))
    console.log('clicado');
      
  }

}
