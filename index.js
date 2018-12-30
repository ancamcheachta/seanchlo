'use strict';

const DEFAULT_OPTIONS = {
    insularLetters: false, // TODO: Le cur i bhfeidhm sa todhchaí
    overdots: true,
    tironianNotes: false
};

const OVERDOT_MAP = {
    Bh: "\u1E02",
    BH: "\u1E02",
    bh: "\u1E03",
    Ch: "\u010A",
    CH: "\u010A",
    ch: "\u010B",
    Dh: "\u1E0A",
    DH: "\u1E0A",
    dh: "\u1E0B",
    Fh: "\u1E1E",
    FH: "\u1E1E",
    fh: "\u1E1F",
    Gh: "\u0120",
    GH: "\u0120",
    gh: "\u0121",
    Mh: "\u1E40",
    MH: "\u1E40",
    mh: "\u1E41",
    Ph: "\u1E56",
    PH: "\u1E56",
    ph: "\u1E57",
    Sh: "\u1E60",
    SH: "\u1E60",
    sh: "\u1E61",
    Th: "\u1E6A",
    TH: "\u1E6A",
    th: "\u1E6B"
};

const TIRONIAN_NOTES_MAP = {
    "&": "\u204A",
    "Agus": "\u204A",
    "AGUS": "\u204A",
    "agus": "\u204A"
};

function getConversionRegex(options) {
    let overdots = options.overdots || DEFAULT_OPTIONS.overdots;
    let tironianNotes = options.tironianNotes || DEFAULT_OPTIONS.tironianNotes;
    let conversionExpr = "";
    let padExpr = () => conversionExpr = conversionExpr.length > 0 ?
        conversionExpr += "|" : conversionExpr;
    
    if (overdots) {
        conversionExpr += Object.keys(OVERDOT_MAP).join("|");
    }
    
    if (tironianNotes) {
        padExpr();
        
        conversionExpr += 
            Object.keys(TIRONIAN_NOTES_MAP).join("|");
    }
    
    return new RegExp(`(${conversionExpr})`, 'g');
}

module.exports = {
    convert: function(value, options) {
        options = options || {};
        
        let conversionRegex = getConversionRegex(options);
        let convertedValue = value;
        let completed = {};
        let overdots = options.overdots || DEFAULT_OPTIONS.overdots;
        let tironianNotes =
            options.tironianNotes || DEFAULT_OPTIONS.tironianNotes;
        let replace = (f, t) => convertedValue = 
            convertedValue.replace(new RegExp(f, 'g'), t);
        
        let group;
        
        while ((group = conversionRegex.exec(value)) !== null) {
            let from = group[0];
            
            if (!(from in completed)) {
                switch (true) {
                    case overdots && from in OVERDOT_MAP:
                        replace(from, OVERDOT_MAP[from]);
                        break;
                    case tironianNotes && from in TIRONIAN_NOTES_MAP:
                        replace(from, TIRONIAN_NOTES_MAP[from]);
                        break;
                }
            }
            
            completed[from] = null;
        }
        
        return convertedValue;
    }
};