import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        css?: string | undefined;
        label?: string | undefined;
        href?: string | undefined;
        ssr?: boolean | undefined;
        loadWidth?: "standard" | "big" | "huge" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LoadingAnchorProps = typeof __propDef.props;
export type LoadingAnchorEvents = typeof __propDef.events;
export type LoadingAnchorSlots = typeof __propDef.slots;
export default class LoadingAnchor extends SvelteComponentTyped<LoadingAnchorProps, LoadingAnchorEvents, LoadingAnchorSlots> {
}
export {};
