export declare const breakpoints: {
    mobile: number;
    tablet: number;
    laptop: number;
    halfScreenBreak: number;
};
export declare const theme: {
    colors: {
        text: {
            primary: string;
            secondary: string;
            accent: string;
            additional: string;
            alternate: string;
            oldPrice: string;
        };
        links: {
            default: string;
            hover: string;
            active: string;
            alternate: {
                default: string;
                hover: string;
                active: string;
            };
        };
        breadcrumbs: {
            default: string;
            current: string;
            hover: string;
        };
        buttons: {
            insurance: {
                default: {
                    color: string;
                    background: string;
                };
                hover: {
                    color: string;
                    background: string;
                };
            };
            default: {
                color: string;
                background: string;
            };
            hover: {
                color: string;
                background: string;
            };
            disabled: {
                color: string;
                background: string;
            };
            additional: {
                hover: {
                    color: string;
                    background: string;
                };
                default: {
                    color: string;
                    background: string;
                };
            };
            alternate: {
                hover: {
                    color: string;
                    background: string;
                };
                default: {
                    color: string;
                    background: string;
                };
            };
        };
        thumbs: {
            active: string;
            hover: string;
            default: string;
        };
        options: {
            active: string;
        };
        borders: {
            default: string;
            active: string;
        };
        background: {
            insurance: string;
            default: string;
            primary: string;
            secondary: string;
            alternate: string;
            header: string;
            footer: string;
        };
        tags: {
            new: string;
            sale: string;
            date: string;
            text: string;
        };
    };
    mixins: {
        mobile: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        tablet: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        laptop: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        halfScreenBreak: (content: any) => import("styled-components").FlattenSimpleInterpolation;
    };
};
export type Theme = typeof theme;
export declare const _dark: Theme;
export declare const dark: {
    colors: {
        text: {
            primary: string;
            secondary: string;
            accent: string;
            additional: string;
            alternate: string;
            oldPrice: string;
        };
        links: {
            default: string;
            hover: string;
            active: string;
            alternate: {
                default: string;
                hover: string;
                active: string;
            };
        };
        breadcrumbs: {
            default: string;
            current: string;
            hover: string;
        };
        buttons: {
            insurance: {
                default: {
                    color: string;
                    background: string;
                };
                hover: {
                    color: string;
                    background: string;
                };
            };
            default: {
                color: string;
                background: string;
            };
            hover: {
                color: string;
                background: string;
            };
            disabled: {
                color: string;
                background: string;
            };
            additional: {
                hover: {
                    color: string;
                    background: string;
                };
                default: {
                    color: string;
                    background: string;
                };
            };
            alternate: {
                hover: {
                    color: string;
                    background: string;
                };
                default: {
                    color: string;
                    background: string;
                };
            };
        };
        thumbs: {
            active: string;
            hover: string;
            default: string;
        };
        options: {
            active: string;
        };
        borders: {
            default: string;
            active: string;
        };
        background: {
            insurance: string;
            default: string;
            primary: string;
            secondary: string;
            alternate: string;
            header: string;
            footer: string;
        };
        tags: {
            new: string;
            sale: string;
            date: string;
            text: string;
        };
    };
    mixins: {
        mobile: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        tablet: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        laptop: (content: any) => import("styled-components").FlattenSimpleInterpolation;
        halfScreenBreak: (content: any) => import("styled-components").FlattenSimpleInterpolation;
    };
};
export type WithTheme = {
    theme: Theme;
};
export type WithThemeAndProps<T> = T & WithTheme;
