'use strict';
/**
 * TODO: Bain tastálacha as `seanchlo.convert()` ar na luachanna seo a leanas:
    Bh: \u1E02
    BH: \u1E02
    bh: \u1E03
    Ch: \u010A
    CH: \u010A
    ch: \u010B
    Dh: \u1E0A
    DH: \u1E0A
    dh: \u1E0B
    Fh: \u1E1E
    FH: \u1E1E
    fh: \u1E1F
    Gh: \u0120
    GH: \u0120
    gh: \u0121
    Mh: \u1E40
    MH: \u1E40
    mh: \u1E41
    Ph: \u1E56
    PH: \u1E56
    ph: \u1E57
    Sh: \u1E60
    SH: \u1E60
    sh: \u1E61
    Th: \u1E6A
    TH: \u1E6A
    th: \u1E6B
    Agus: \u204A
    AGUS: \u204A
    agus: \u204A
    &: \u204A
*/

const chai = require('chai');
const seanchlo = require ('./index');
const assert = chai.assert;

const BUNSAMPLA_ROIMHE = 'Is túisce deoch ná scéal';
const BUNSAMPLA_I_NDIAIDH = 'Is túisce deoċ ná scéal';
const SAMPLA_AGUS_ROIMHE = 'Saol fada, gob fliuch, agus bás in Éirinn';
const SAMPLA_AGUS_I_NDIAIDH = 'Saol fada, gob fliuċ, ⁊ bás in Éirinn';
const TIRONIAN_NOTES = {tironianNotes: true};

describe('Tástálacha `convert()`', () => {
    it('tuigeann sé séimhiuithe ón mbunshampla', () => {
        let converted = seanchlo.convert(BUNSAMPLA_ROIMHE);
        
        assert(converted == BUNSAMPLA_I_NDIAIDH, 'Níl an luach bailí.');
    });
    
    it('tuigeann sé sampla le "agus"', () => {
        let converted = seanchlo.convert(SAMPLA_AGUS_ROIMHE, TIRONIAN_NOTES);
        
        assert(converted == SAMPLA_AGUS_I_NDIAIDH, 'Níl an luach bailí.');
    });
});
