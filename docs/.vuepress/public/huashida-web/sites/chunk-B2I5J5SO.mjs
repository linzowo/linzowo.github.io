function A(a){for(var t=0,e,c=0,o=a.length;o>=4;++c,o-=4)e=255&a.charCodeAt(c)|(255&a.charCodeAt(++c))<<8|(255&a.charCodeAt(++c))<<16|(255&a.charCodeAt(++c))<<24,e=1540483477*(65535&e)+(59797*(e>>>16)<<16),e^=e>>>24,t=1540483477*(65535&e)+(59797*(e>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(o){case 3:t^=(255&a.charCodeAt(c+2))<<16;case 2:t^=(255&a.charCodeAt(c+1))<<8;case 1:t^=255&a.charCodeAt(c),t=1540483477*(65535&t)+(59797*(t>>>16)<<16)}return t^=t>>>13,t=1540483477*(65535&t)+(59797*(t>>>16)<<16),((t^t>>>15)>>>0).toString(36)}export{A as a};
//# sourceMappingURL=chunk-B2I5J5SO.mjs.map
