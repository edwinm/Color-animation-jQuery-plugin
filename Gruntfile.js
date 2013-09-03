// To minify, make sure Java is installed.
// To compress, make sure zopfli is installed.

module.exports = function (grunt) {
	grunt.initConfig({
		//pkg: grunt.file.readJSON('package.json'),
		'closure-compiler': {
			frontend: {
				closurePath: 'closure-compiler',
				js: 'jquery.animate-colors.js',
				jsOutputFile: 'jquery.animate-colors-min.js',
				maxBuffer: 500,
				options: {
					compilation_level: 'ADVANCED_OPTIMIZATIONS',
					language_in: 'ECMASCRIPT5_STRICT',
					externs: 'jquery/jquery-1.8.0.min.js',
					warning_level: 'QUIET'
				}
			}
		},
		'zopfli': {
			'compress-plugins': {
				'files': {
					'jquery.animate-colors-min.js.gz': 'jquery.animate-colors-min.js'
				}
			}
		},
		'watch': {
			files: ['jquery.animate-colors.js'],
			tasks: ['closure-compiler', 'zopfli']
		}
	});

	grunt.loadNpmTasks('grunt-closure-compiler');
	grunt.loadNpmTasks('grunt-zopfli');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['closure-compiler', 'zopfli']);
};