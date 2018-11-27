import React, {Component} from 'react';
import treeSvg from '../../assets/tree.svg';
import Tree from '../../assets/tree.svg';

import './Tree.css';

const tree = props => {
  return (
    <div className={props.className} id="tree">
      <Tree onClick={props.onClick}></Tree>
    </div>
  );
};

export default tree;
