import { MutableRefObject } from "react";
/**
 * Hook that callback clicks outside of the passed ref
 */
export declare const useHandleOutsideClick: {
    (ref: MutableRefObject<HTMLElement | null>, callback: () => void): void;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
