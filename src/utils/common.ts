import _ from 'lodash';

let seen: Array<any> = [];

export const propsAreEqual = (prevProps: any, nextProps: any) => {
    const prevPropsKeys = Object.keys(prevProps);

    const replacer = (key: any, val: any) => {
        if (val != null && typeof val == "object") {
             if (seen.indexOf(val) >= 0) {
                return;
            }
            seen.push(val);
        }
        return val;
    };

    for (let i = 0; i < prevPropsKeys.length; i++) {
        const key = prevPropsKeys[i];
        const prevProp = prevProps[key];
        const nextProp = nextProps[key];

        if (JSON.stringify(prevProp, replacer) !== JSON.stringify(nextProp, replacer)) {
            seen = [];
            return false;
        }
    }
    seen = [];
    return true;
};