import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'translatorsBr',
})
export class TranslatorsBrPipe implements PipeTransform {
	transform(value: string, args?: any): any {
		//Sobre Personagens -----------------------------------------
		switch (value) {
			case 'Alive':
				value = 'Vivo';
				return value
			case 'Dead':
				value ='Morto';
				return value;
			case 'Human':
				value ='Humano';
				return value;
			case 'Male':
				value ='Masculino';
				return value;
			case 'Female':
				value ='Feminino';
				return value;
			//Sobre Locais -----------------------------------------
			case 'Earth (Replacement Dimension)':
				value ='Earth (Replacement...';
				return value;
			case 'Planet':
				value ='Planeta';
				return value;
			case 'Microverse':
				value ='Microverso';
				return value;
			case 'Fantasy town':
				value ='Cidade da fantasia';
				return value;
			case 'Space station':
				value ='Estação Espacial';
				return value;
			case 'Dream':
				value ='Sonho';
				return value;
			case 'Dimension':
				value ='Dimensão';
				return value;
			case 'Menagerie':
				value ='zoológico';
				return value;
			case 'Customs':
				value ='Alfândega';
				return value;
			case 'Dwarf planet (Celestial Dwarf)':
				value ='Planeta Anão (Anão Celestial)';
				return value;
			case 'Miniverse':
				value ='Miniverso';
				return value;
			case 'Teenyverse':
				value ='Pequeno verso';
				return value;
			case 'Box':
				value ='Pequeno Caixa';
				return value;
			case 'Spacecraft':
				value ='Nave espacial';
				return value;
			case 'Artificially generated world':
				value ='Mundo gerado artificialmente';
				return value;
			case 'Machine':
				value ='Máquina';
				return value;
			case 'Arcade':
				value ='videogames';
				return value;
			case 'Cluster':
				value ='Espaço';
				return value;
			//Outros -----------------------------------------
			case '' || 'unknown':
				value ='Desconhecido';
				return value;
			default:
				return value;
		}
	}
}
