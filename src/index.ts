import config from '@mmstudio/config';

export default function an35<T = string>(key: string) {
	return config[key] as T;
}
