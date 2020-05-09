import React, { useState, useEffect, useLayoutEffect } from 'react';
import 'src/pages/week1/week1.scss';

export default function ContentItemArea(v, func) {
    return (
        <div className="content-item" key={v}
                                    onClick={() => {func(v)}}>{v}</div>
    );
    
};
