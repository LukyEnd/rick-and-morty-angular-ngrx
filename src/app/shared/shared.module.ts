import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorsBrPipe } from '../pipe/translators-br.pipe';
import { SkeletonLoaderModule } from './skeleton-loader/skeleton-loader.module';

@NgModule({
	declarations: [TranslatorsBrPipe],
	imports: [CommonModule, SkeletonLoaderModule],
	exports: [TranslatorsBrPipe, SkeletonLoaderModule],
})
export class SharedModule {}
