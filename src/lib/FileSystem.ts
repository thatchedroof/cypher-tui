import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile, exists, createDir, readDir, writeTextFile } from '@tauri-apps/api/fs';

export class FileSystem {
	path: string | undefined;
	currentDir: string = '';

	async init() {
		this.path = await resolveResource('data/userFiles');
		if (!(await exists(this.path))) {
			createDir(this.path);
		}
	}

	async read(file: string) {
		if (!this.path) {
			this.init();
		}

		return readTextFile(`${this.path}\\${file}`);
	}

	async write(file: string, contents: string) {
		if (!this.path) {
			this.init();
		}

		return writeTextFile(`${this.path}\\${file}`, contents);
	}

	async listFiles(inputPath?: string) {
		if (!this.path) {
			this.init();
		}

		let files = (await readDir(this.path! + (inputPath ? `\\${inputPath}` : ''))).map(
			(file) => file.path
		);
		return files;
	}

	get currentPath() {
		return this.path + '\\' + this.currentDir;
	}
}
