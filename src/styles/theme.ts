const font = {
    title: `
        font-size: 24px;
        font-weight: bolder;
    `,
    subtitle: `
        font-size: 20px;
        font-weight: bolder;
    `,
}

const div = {
    default:`
        display: block;
    `,
}

const color = {

}

const zIndex = {
    zero:`
        position: relative;
        z-index: -1;
    `,
    one:`
        position: relative;
        z-index: 1;
    `,
    two:`
        position: relative;
        z-index: 2;
    `,
    three:`
        position: relative;
        z-index: 3;
    `,
}

export const theme = {
    font,
    div,
    color,
    zIndex
}
  
export type Theme = typeof theme;