declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '@ckeditor/ckeditor5-build-classic' {
	const ClassicEditorBuild: any;
	export = ClassicEditorBuild;
}
