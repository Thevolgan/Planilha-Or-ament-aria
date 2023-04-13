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
    doc.addImage("assets/Logo2.png", "PNG", 65, 9, 80,80);  

    //TITULO img
    doc.addImage("assets/Logo.png", "PNG", 420, 2, 290, 80);

    //CONTEÚDO 1ª TABELA:
    //NOME FANTASIA
    doc.addFileToVFS("Nunito.ttf", Nunito);
    doc.addFont("Nunito.ttf", "Nunito", "Normal");
    autoTable(doc, {
      body: [
        [ 
          {content: 'Nome de Fantasia:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1},cellWidth: 119}}, 
          {content: 'ENERGIN TECNOLOGIA E INOVAÇÃO DA AMAZÔNIA', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 115, //+25
      theme: 'grid',
    })

    //RAZÃO SOCIAL
    autoTable(doc, {
      body: [
        [
          {content: 'Razão Social:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 91}}, 
          {content: 'ENERGIN DA AMAZONIA LTDA', styles: {fontSize: 9, fontStyle: 'normal', lineColor: false, textColor: [0,0,0], lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 140,
      theme: 'grid',
    })
    
    //CNPJ & OPTANTE
    autoTable(doc, {
      body: [
        [ 
          {content: 'CNPJ:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 48}}, 
          {content: '05.682.859/0001-41', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 540}}, 
          {content: 'Optante pelo SIMPLES?', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 149}}, 
          {content: '(NÃO)', styles: {fontSize: 9, fontStyle: 'normal', lineColor: false, textColor: [0,0,0], lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 165,
      theme: 'grid',
    })

    //ENDEREÇO
    autoTable(doc, {
      body: [
        [ 
          {content: 'Endereço:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 72}}, 
          {content: 'Rua Professor Castelo Branco, n. 05, Conjunto Jardim Yolanda', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 190,
      theme: 'grid',
    })

    //BAIRRO & CIDADE
    autoTable(doc, {
      body: [
        [ 
          {content: 'Bairro:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 52}}, 
          {content: 'Parque Dez de Novembro', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 536}}, 
          {content: 'Cidade:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 56}}, 
          {content: 'Manaus', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 215,
      theme: 'grid',
    })

    //CEP & EMAIL
    autoTable(doc, {
      body: [
        [ 
          {content: 'CEP:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 41}}, 
          {content: '69055-090', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 547}}, 
          {content: 'E-mail:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 52}}, 
          {content: 'energin.amazonia@gmail.com', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 240,
      theme: 'grid',
    })

     //TELEFONE
     autoTable(doc, {
      body: [
        [ 
          {content: 'Telefone:', styles: {fontSize: 9, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 68}}, 
          {content: '(92) 3232-7651', styles: {fontSize: 9, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}}}, 
        ]
      ],
      startY: 265,
      theme: 'grid',
    })

     //TÍTULO CENTRAL
     autoTable(doc, {
      body: [
        [ 
          {content: 'PLANILHA ORÇAMENTÁRIA', styles: {fontSize: 12, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'center', textColor: [255,255,255], fillColor: '#404040', lineWidth:{right: 1, top: 0, left: 1, bottom:0}}}, 
        ]
      ],
      startY: 290,
      theme: 'grid',
    })
    
    //INFORMAÇÕES:
    autoTable(doc, {
     head: [
      [
        {content: 'ID', styles: {fontSize: 9, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF', cellWidth: 55, lineWidth:{right: 0, top: 0, left: 1, bottom:0}}}, 
        {content: 'ESCOLA', styles: {fontSize: 9, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF', cellWidth: 480, lineWidth:{right: 0, top: 0, left: 0, bottom:0}}}, 
        {content: 'OS', styles: {fontSize: 9, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF', cellWidth: 30, lineWidth:{right: 0, top: 0, left: 0, bottom:0}}}, 
        {content: 'DATA DE EXECUÇÃO', styles: {fontSize: 9, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF',  cellWidth: 180, lineWidth:{right: 0, top: 0, left: 0, bottom:0}}}, 
        {content: 'VALOR', styles: {fontSize: 9, fontStyle: 'italic', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#BFBFBF', lineWidth:{right: 1, top: 0, left: 0, bottom:0}}}, 
      ]
     ],

     startY: 320,
     theme: 'grid',
   })

    //DADOS DA ESCOLA E OS
    autoTable(doc, {
      body: [
        [ 
          {content: '1', styles: {fontSize: 10, fontStyle: 'normal', lineColor: false, valign: 'middle', halign: 'center', cellWidth: 55, textColor: [0,0,0], lineWidth:{right: 0, top: 1, left:1, bottom:1}}}, 
          {content: 'Escola Estadual Senador Alvaro Maia - Subestação Aérea de 75 kVA ', styles: {fontSize: 7.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, valign: 'middle', cellWidth: 465, halign: 'left',  lineWidth:{right: 0, top: 1, left: 0, bottom:1}}}, 
          {content: '024/2023', styles: {fontSize: 7, fontStyle: 'normal', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], lineWidth:{right: 0, top: 1, left: 0, bottom:1}, cellWidth: 65}}, 
          {content: '7-fev-23', styles: {fontSize: 7, fontStyle: 'normal', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], lineWidth:{right: 0, top: 1, left: 0, bottom:1}, cellWidth: 65}}, 
          {content: '7-mar-23', styles: {fontSize: 7, fontStyle: 'normal', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], lineWidth:{right: 0, top: 1, left: 0, bottom:1}, cellWidth: 77}}, 
          {content: 'R$ 44.878,80 ', styles: {fontSize: 8, fontStyle: 'normal', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], lineWidth:{right: 0, top: 1, left: 0, bottom:1}, cellWidth: 100}}, 
          {content: 'quarenta e quatro mil, oitocentos e setenta e oito reais e oitenta centavos', styles: {fontSize: 6.5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, valign: 'middle', halign: 'center', lineWidth:{right: 1, top: 1, left: 0, bottom:1}}},   
        ]
      ],
      startY: 345,
      theme: 'grid',
    })

    //TOTAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'TOTAL', styles: {fontSize: 12, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, valign: 'middle', halign: 'center', cellWidth: 640}}, 
          {content: 'R$ 242.917,79', styles: {fontSize: 12, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:1, bottom:1}, valign: 'middle', halign: 'center'}}, 
          {content: 'duzentos e quarenta e dois mil, novecentos e dezessete reais e setenta e nove centavos', 
          styles: {fontSize: 8, fontStyle: 'bold', textColor: [0,0,0], lineColor: false,  halign: 'center', lineWidth:{right: 1, top: 1, left:1, bottom:1}, cellWidth: 200}}, 
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
