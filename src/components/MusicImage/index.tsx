import { ImageContainer } from "./styles";

interface MusicImageI {
	src: string | undefined;
	alt: string;
}

export default function MusicImage(props: MusicImageI) {
	return <ImageContainer $src={props.src}></ImageContainer>;
}
