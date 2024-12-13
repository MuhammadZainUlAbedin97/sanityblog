import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export const components: PortableTextComponents = {
	types: {
		image: (props) =>
			props.value ? (
				<Image
					className="rounded-lg not-prose w-full h-auto"
					src={urlFor(props.value)
						.width(600)
						.height(400)
						.quality(80)
						.auto("format")
						.url()}
					alt={props?.value?.alt || ""}
					width="600"
					height="400"
				/>
			) : null,
		h1: (props) => (props.value ? <h1>{props.value}</h1> : null),
		h2: (props) => (props.value ? <h2>{props.value}</h2> : null),
		h3: (props) => (props.value ? <h3>{props.value}</h3> : null),
		h4: (props) => (props.value ? <h4>{props.value}</h4> : null),
	},
};
