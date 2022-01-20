import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translatorsBr',
})
export class TranslatorsBrPipe implements PipeTransform {
	transform(value: string, args?: any): any {
		//Sobre Personagens -----------------------------------------
		switch (value) {
			case 'Alive':
				'Vivo';
				break;
			case 'Dead':
				'Morto';
				break;
			case 'Human':
				'Humano';
				break;
			case 'Male':
				'Masculino';
				break;
			case 'Female':
				'Feminino';
				break;
			//Sobre Locais -----------------------------------------
			case 'Earth (Replacement Dimension)':
				'Earth (Replacement...';
				break;
			case 'Planet':
				'Planeta';
				break;
			case 'Microverse':
				'Microverso';
				break;
			case 'Fantasy town':
				'Cidade da fantasia';
				break;
			case 'Space station':
				'Estação Espacial';
				break;
			case 'Dream':
				'Sonho';
				break;
			case 'Dimension':
				'Dimensão';
				break;
			case 'Menagerie':
				'zoológico';
				break;
			case 'Customs':
				'Alfândega';
				break;
			case 'Dwarf planet (Celestial Dwarf)':
				'Planeta Anão (Anão Celestial)';
				break;
			case 'Miniverse':
				'Miniverso';
				break;
			case 'Teenyverse':
				'Pequeno verso';
				break;
			case 'Box':
				'Pequeno Caixa';
				break;
			case 'Spacecraft':
				'Nave espacial';
				break;
			case 'Artificially generated world':
				'Mundo gerado artificialmente';
				break;
			case 'Machine':
				'Máquina';
				break;
			case 'Arcade':
				'videogames';
				break;
			case 'Cluster':
				'Espaço';
				break;
			//Outros -----------------------------------------
			case '' || 'unknown':
				'Desconhecido';
				break;
			default:
				value;
				break;
		}
	}
}
