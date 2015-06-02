﻿/** @jsx React.DOM */
'use strict'

var Constants = require('../util/Constants.js');
var Strings = require('../util/Strings.js');

module.exports = React.createClass({
  handleCollapseTabs: function () {
    this.props.handleCollapseTabs();
  },  
  handleExpandTabs: function () {
    this.props.handleExpandTabs();
  },  
  handleOpenSettings: function () {
    chrome.tabs.create({ url: Constants.paths.OPTIONS });
  },
  handleScrollToTop: function () {
    this.props.handleScrollToTop();
  },
  render: function () {
    var collapseConteinerClasses = classNames({
      'hidden': this.props.column != Constants.menus.menuBar.viewActions.TREE_VIEW
    });
    return (
      <div className = { "bottom-bar" }>
        <button
          title = { Strings.bottomBar.SETTINGS }
          onClick = { this.handleOpenSettings }>
          <i
            className = "fa fa-cog"/>
        </button>
        <div className = { collapseConteinerClasses }>
          <button
            title = { Strings.bottomBar.EXPAND_TABS }
            onClick = { this.handleExpandTabs }>
            <i
            className = "fa fa-plus-square-o"/>
            </button>
          <button
            title = { Strings.bottomBar.COLLAPSE_TABS }
            onClick = { this.handleCollapseTabs }>
            <i
            className = "fa fa-minus-square-o"/>
          </button>
        </div>
        <button 
          title = { Strings.bottomBar.GO_TO_TOP }
          className = "flexible"
          onMouseDown = { this.handleScrollToTop } >
          <i className = "fa fa-level-up"/>
          <span className = "hspacer02"/>
          { Strings.bottomBar.GO_TO_TOP }
          </button>
      </div>
    );
}
});
