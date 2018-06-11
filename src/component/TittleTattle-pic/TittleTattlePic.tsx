import * as React from 'react';
import './TittleTattlePic.css';

export interface ITittleTattlePicProps {
    src: string;
    alt: string;
}

// tslint:disable
export const TittleTattlePic: React.SFC<ITittleTattlePicProps> = (props) => (<img className='tittletattle-pic'
                                                                      src={props.src}
                                                                      alt={props.alt}/>);
