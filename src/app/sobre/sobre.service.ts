import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SobreService {

  private informacoes: any[];

  constructor() { }


  public getListarInformacoes() {
    return [
      {
        id: 1, title: 'Quem Somos', letra: 'O',
        // tslint:disable-next-line: max-line-length
        text1: ' Restaurante TROPICALIZE tem em sua essência a culinária brasileira com a utilização de receitas próprias, com  sabores diversos e ainda, dentro do cardápio utilizamos receitas da culinária Nordestina e Mineira, dentre outras.',
        // tslint:disable-next-line: max-line-length
        text2: 'A equipe TROPICALIZE  foi elaborada pensando no melhor atendimento, aliando a qualidade de nossos produtos, possuindo profissionais qualificados na área administrativa, Gestores capacitados (gerentes), profissionais na  área de nutrição, cozinheiros e auxiliares de cozinha capacitados para o atendimento.',
        // tslint:disable-next-line: max-line-length
        text3: 'Um diferencial do Restaurante TROPICALIZE, com certeza é a visão de seus gestores, preocupados em atender a comunidade Local com excelencia, aliando a inovação e conforto para que o Restaurante apresente os melhores produtos aliando com custo/benefício.',
        text4: 'A equipe tem metas, e objetivos traçados em reunião e melhorias ao longo do trabalho.',
         // tslint:disable-next-line: max-line-length
        text5: 'Missão: Oferecer aos clientes um excelente atendimento, aliado a qualidade e sabor da comida, contando com um ambiente familiar e aconchegante.',
        // tslint:disable-next-line: max-line-length
        text6: 'Visão: Ser referência na Comunidade Local somando Gastronomia + entretenimento e oportunizando a todos a um ambiente de conforto e de qualidade com um diferencial de sabor e excelência no atendimento.',
        text7: `<ul>
        <li>Foco na satisfação do cliente.</li>
        <li>Ética e transparência com nossos clientes, funcionários, fornecedores e comunidade;</li>
        <li>Trabalhar com fornecedores qualificados e produtos de qualidade;</li>
        <li>Trabalhar rigorosamente dentro das normas técnicas de segurança alimentar;</li>
        <li>Destinar corretamente os resíduos, contribuindo para a preservação do meio ambiente;</li>
        <li>Compromisso com resultados e cumprimento de metas;</li>
        <li>Desenvolvimento da mão de obra local e aperfeiçoamento contínuo;</li>
        <li>Proporcionar um ambiente de trabalho limpo e seguro;</li>
        <li>Inovação constante nos nossos processos e serviços.</li>
        </ul>`,
        // tslint:disable-next-line: max-line-length
        text8: 'A empresa agradece o empenho de todos nossos colaboradores, ressalta a importância de nossos clientes e amigos em nossa história, sabedores que juntos construiremos o melhor.'
      }
    ];
  }
}
