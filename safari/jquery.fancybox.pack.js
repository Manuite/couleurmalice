


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>source/jquery.fancybox.pack.js at master from fancyapps/fancyBox - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="ECTDPA91DU5twKzmVbuQoof0AGNcHqrfMPwtEL36nwA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-ce4abc8fb736cacb557664dcd8194a5486c74f6b.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-6c2aad85e5c2becfaac6d62ce0f290d10fa1725e.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-724a1478428e953614c0459ba27f5d900fc109be.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/fancyapps/fancyBox/blob/81816a2cbab1d1b003133c05962e76239c5958c1/source/jquery.fancybox.pack.js'>
    

    <meta name="description" content="fancyBox is a tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages." />
  <link href="https://github.com/fancyapps/fancyBox/commits/master.atom" rel="alternate" title="Recent Commits to fancyBox:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob  vis-public env-production ">
    


    

      <div id="header" class="true clearfix">
        <div class="container" class="clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882716" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1323882716" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1324325358" />
          </a>

              
    <div class="topsearch ">
<form action="/search" id="top_search_form" method="get">        <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
        <div class="search placeholder-field js-placeholder-field">
          <label class="placeholder" for="global-search-field">Search…</label>
          <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" /> <input type="submit" value="Search" class="button" />
        </div>
        <input type="hidden" name="type" value="Everything" />
        <input type="hidden" name="repo" value="" />
        <input type="hidden" name="langOverride" value="" />
        <input type="hidden" name="start_value" value="1" />
</form>      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/Manuite"><img height="20" src="https://secure.gravatar.com/avatar/5bbb7d9ecc1f4fe80ac5580c2fd07113?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/Manuite" class="name">Manuite</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="icon">Notifications</span>
        </a>
      </li>
      <li><a href="/account" id="settings" class="tooltipped downwards" title="Account Settings"><span class="icon">Account Settings</span></a></li>
      <li><a href="/logout" id="logout" class="tooltipped downwards" title="Log Out"><span class="icon">Log Out</span></a></li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site">
      <div class="container">
        <div class="pagehead repohead instapaper_ignore readability-menu">


        <div class="title-actions-bar">
          <h1>
            <a href="/fancyapps">fancyapps</a> /
            <strong><a href="/fancyapps/fancyBox" class="js-current-repository">fancyBox</a></strong>
          </h1>
          



              <ul class="pagehead-actions">


          <li class="js-toggler-container watch-button-container ">
            <a href="/fancyapps/fancyBox/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
            <a href="/fancyapps/fancyBox/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
          </li>

              <li><a href="/fancyapps/fancyBox/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/fancyapps/fancyBox/watchers" title="Watchers" class="tooltipped downwards">
              165
            </a>
          </li>
          <li class="forks">
            <a href="/fancyapps/fancyBox/network" title="Forks" class="tooltipped downwards">
              21
            </a>
          </li>
        </ul>
      </li>
    </ul>

        </div>

          

  <ul class="tabs">
    <li><a href="/fancyapps/fancyBox" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/fancyapps/fancyBox/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/fancyapps/fancyBox/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/fancyapps/fancyBox/issues" highlight="repo_issues">Issues <span class='counter'>20</span></a></li>


    <li><a href="/fancyapps/fancyBox/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/fancyapps/fancyBox/tree-list/81816a2cbab1d1b003133c05962e76239c5958c1"
      data-blob-url-prefix="/fancyapps/fancyBox/blob/81816a2cbab1d1b003133c05962e76239c5958c1"
    >

  <div class="breadcrumb">
    <b><a href="/fancyapps/fancyBox">fancyBox</a></b> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/fancyapps/fancyBox/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container" data-navigation-enable-mouse>
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/fancyapps/fancyBox/blob/master/source/jquery.fancybox.pack.js" data-name="master">master</a>
                  </h4>
                </div>

                <div class="commitish-item tag-commitish selector-item">
                  <h4>
                      <a href="/fancyapps/fancyBox/blob/v2.0.4/source/jquery.fancybox.pack.js" data-name="v2.0.4">v2.0.4</a>
                  </h4>
                </div>

              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/fancyapps/fancyBox" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/fancyapps/fancyBox/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/fancyapps/fancyBox/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
    <li><a href="/fancyapps/fancyBox/tags" class="" highlight="repo_tags">Tags <span class="counter">1</span></a></li>
    <li><a href="/fancyapps/fancyBox/downloads" class="" highlight="repo_downloads">Downloads <span class="counter">4</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/fancyapps/fancyBox/commit/81816a2cbab1d1b003133c05962e76239c5958c1" class="message">Merge pull request </a><a href="https://github.com/fancyapps/fancyBox/issues/78" title="Update source/jquery.fancybox.js" class="issue-link">#78</a><a href="/fancyapps/fancyBox/commit/81816a2cbab1d1b003133c05962e76239c5958c1" class="message"> from themire/patch-1</a>
      <a href="javascript:;" class="minibutton expander-minibutton js-details-target"><span>…</span></a>
  </p>
    <div class="commit-desc"><pre>Update source/jquery.fancybox.js</pre></div>
  <div class="commit-meta">
    <a href="/fancyapps/fancyBox/commit/81816a2cbab1d1b003133c05962e76239c5958c1" class="sha-block">commit <span class="sha">81816a2cba</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/d5cc7afdb5dd0a2de48549206b1b849b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/fancyapps">fancyapps</a></span>
      authored <time class="js-relative-date" datetime="2011-12-29T09:16:20-08:00" title="2011-12-29 09:16:20">December 29, 2011</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="source/jquery.fancybox.pack.js/">
      <b><a href="/fancyapps/fancyBox/tree/81816a2cbab1d1b003133c05962e76239c5958c1" class="js-rewrite-sha">fancyBox</a></b> / <a href="/fancyapps/fancyBox/tree/81816a2cbab1d1b003133c05962e76239c5958c1/source" class="js-rewrite-sha">source</a> / jquery.fancybox.pack.js       <span style="display:none" id="clippy_2896" class="clippy-text">source/jquery.fancybox.pack.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315937507?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_2896&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315937507?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_2896&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="source/jquery.fancybox.pack.js/" data-permalink-url="/fancyapps/fancyBox/blob/81816a2cbab1d1b003133c05962e76239c5958c1/source/jquery.fancybox.pack.js" data-title="source/jquery.fancybox.pack.js at master from fancyapps/fancyBox - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/fancyapps/fancyBox/edit/81816a2cbab1d1b003133c05962e76239c5958c1/source/jquery.fancybox.pack.js" data-method="post" rel="nofollow"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1315937507" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>32 lines (32 sloc)</span>
                <span>16.331 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/fancyapps/fancyBox/raw/master/source/jquery.fancybox.pack.js" id="raw-url">raw</a></li>
                  <li><a href="/fancyapps/fancyBox/blame/master/source/jquery.fancybox.pack.js">blame</a></li>
                <li><a href="/fancyapps/fancyBox/commits/master/source/jquery.fancybox.pack.js" rel="nofollow">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */</div><div class='line' id='LC2'>(function(t,q,e){var l=e(t),r=e(q),a=e.fancybox=function(){a.open.apply(this,arguments)},s=!1;e.extend(a,{version:&quot;2.0.4&quot;,defaults:{padding:15,margin:20,width:800,height:600,minWidth:200,minHeight:200,maxWidth:9999,maxHeight:9999,autoSize:!0,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!e.browser.msie||6&lt;e.browser.version||!q.documentElement.hasOwnProperty(&quot;ontouchstart&quot;),scrolling:&quot;auto&quot;,wrapCSS:&quot;fancybox-default&quot;,arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,</div><div class='line' id='LC3'>modal:!1,loop:!0,ajax:{},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'&lt;div class=&quot;fancybox-wrap&quot;&gt;&lt;div class=&quot;fancybox-outer&quot;&gt;&lt;div class=&quot;fancybox-inner&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;',image:'&lt;img class=&quot;fancybox-image&quot; src=&quot;{href}&quot; alt=&quot;&quot; /&gt;',iframe:'&lt;iframe class=&quot;fancybox-iframe&quot; name=&quot;fancybox-frame{rnd}&quot; frameborder=&quot;0&quot; hspace=&quot;0&quot; '+(e.browser.msie?'allowtransparency=&quot;true&quot;&quot;':&quot;&quot;)+&quot;&gt;&lt;/iframe&gt;&quot;,swf:'&lt;object classid=&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot; width=&quot;100%&quot; height=&quot;100%&quot;&gt;&lt;param name=&quot;wmode&quot; value=&quot;transparent&quot; /&gt;&lt;param name=&quot;allowfullscreen&quot; value=&quot;true&quot; /&gt;&lt;param name=&quot;allowscriptaccess&quot; value=&quot;always&quot; /&gt;&lt;param name=&quot;movie&quot; value=&quot;{href}&quot; /&gt;&lt;embed src=&quot;{href}&quot; type=&quot;application/x-shockwave-flash&quot; allowfullscreen=&quot;true&quot; allowscriptaccess=&quot;always&quot; width=&quot;100%&quot; height=&quot;100%&quot; wmode=&quot;transparent&quot;&gt;&lt;/embed&gt;&lt;/object&gt;',</div><div class='line' id='LC4'>error:'&lt;p class=&quot;fancybox-error&quot;&gt;The requested content cannot be loaded.&lt;br/&gt;Please try again later.&lt;/p&gt;',closeBtn:'&lt;div title=&quot;Close&quot; class=&quot;fancybox-item fancybox-close&quot;&gt;&lt;/div&gt;',next:'&lt;a title=&quot;Next&quot; class=&quot;fancybox-item fancybox-next&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/a&gt;',prev:'&lt;a title=&quot;Previous&quot; class=&quot;fancybox-item fancybox-prev&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/a&gt;'},openEffect:&quot;fade&quot;,openSpeed:250,openEasing:&quot;swing&quot;,openOpacity:!0,openMethod:&quot;zoomIn&quot;,closeEffect:&quot;fade&quot;,closeSpeed:250,closeEasing:&quot;swing&quot;,closeOpacity:!0,closeMethod:&quot;zoomOut&quot;,</div><div class='line' id='LC5'>nextEffect:&quot;elastic&quot;,nextSpeed:300,nextEasing:&quot;swing&quot;,nextMethod:&quot;changeIn&quot;,prevEffect:&quot;elastic&quot;,prevSpeed:300,prevEasing:&quot;swing&quot;,prevMethod:&quot;changeOut&quot;,helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:&quot;pointer&quot;},closeClick:!0},title:{type:&quot;float&quot;}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c,d){e.isArray(b)||(b=b.jquery?e(b).get():</div><div class='line' id='LC6'>[b]);if(b.length)a.close(!0),a.isActive=!0,a.opts=e.extend(!0,{},a.defaults,c),a.group=b,a._start(d||0)},cancel:function(){if(!(a.coming&amp;&amp;!1===a.trigger(&quot;onCancel&quot;))&amp;&amp;(a.coming=null,a.hideLoading(),a.ajaxLoad&amp;&amp;a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload))a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null},close:function(b){a.cancel();if(a.current&amp;&amp;!1!==a.trigger(&quot;beforeClose&quot;))a.unbindEvents(),!a.isOpen||b&amp;&amp;!0===b[0]?(e(&quot;.fancybox-wrap&quot;).stop().trigger(&quot;onReset&quot;).remove(),a._afterZoomOut()):</div><div class='line' id='LC7'>(a.isOpen=a.isOpened=!1,e(&quot;.fancybox-item&quot;).remove(),a.wrap.stop(!0).removeClass(&quot;fancybox-opened&quot;),a.inner.css(&quot;overflow&quot;,&quot;hidden&quot;),a.transitions[a.current.closeMethod]())},play:function(b){var c=function(){clearTimeout(a.player.timer)},d=function(){c();if(a.current&amp;&amp;a.player.isActive)a.player.timer=setTimeout(a.next,a.current.playSpeed)},g=function(){c();e(&quot;body&quot;).unbind(&quot;.player&quot;);a.player.isActive=!1;a.trigger(&quot;onPlayEnd&quot;)};if(a.player.isActive||b&amp;&amp;!1===b[0])g();else if(a.current&amp;&amp;(a.current.loop||</div><div class='line' id='LC8'>a.current.index&lt;a.group.length-1))a.player.isActive=!0,e(&quot;body&quot;).bind({&quot;afterShow.player onUpdate.player&quot;:d,&quot;onCancel.player beforeClose.player&quot;:g,&quot;beforeLoad.player&quot;:c}),d(),a.trigger(&quot;onPlayStart&quot;)},next:function(){a.current&amp;&amp;a.jumpto(a.current.index+1)},prev:function(){a.current&amp;&amp;a.jumpto(a.current.index-1)},jumpto:function(b){a.current&amp;&amp;(b=parseInt(b,10),1&lt;a.group.length&amp;&amp;a.current.loop&amp;&amp;(b&gt;=a.group.length?b=0:0&gt;b&amp;&amp;(b=a.group.length-1)),&quot;undefined&quot;!==typeof a.group[b]&amp;&amp;(a.cancel(),a._start(b)))},</div><div class='line' id='LC9'>reposition:function(b){a.isOpen&amp;&amp;a.wrap.css(a._getPosition(b))},update:function(){a.isOpen&amp;&amp;(s||setTimeout(function(){if(s&amp;&amp;(s=!1,a.current)){if(a.current.autoSize)a.inner.height(&quot;auto&quot;),a.current.height=a.inner.height();a._setDimension();a.current.canGrow&amp;&amp;a.inner.height(&quot;auto&quot;);a.reposition();a.trigger(&quot;onUpdate&quot;)}},100),s=!0)},toggle:function(){if(a.isOpen)a.current.fitToView=!a.current.fitToView,a.update()},hideLoading:function(){e(&quot;#fancybox-loading&quot;).remove()},showLoading:function(){a.hideLoading();</div><div class='line' id='LC10'>e('&lt;div id=&quot;fancybox-loading&quot;&gt;&lt;/div&gt;').click(a.cancel).appendTo(&quot;body&quot;)},getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&amp;&amp;a.wrap.unbind(&quot;.fb&quot;);r.unbind(&quot;.fb&quot;);l.unbind(&quot;.fb&quot;)},bindEvents:function(){var b=a.current,c=b.keys;b&amp;&amp;(l.bind(&quot;resize.fb, orientationchange.fb&quot;,a.update),c&amp;&amp;r.bind(&quot;keydown.fb&quot;,function(b){var g;if(!b.ctrlKey&amp;&amp;!b.altKey&amp;&amp;!b.shiftKey&amp;&amp;!b.metaKey&amp;&amp;0&gt;e.inArray(b.target.tagName.toLowerCase(),[&quot;input&quot;,&quot;textarea&quot;,</div><div class='line' id='LC11'>&quot;select&quot;,&quot;button&quot;]))g=b.keyCode,-1&lt;e.inArray(g,c.close)?(a.close(),b.preventDefault()):-1&lt;e.inArray(g,c.next)?(a.next(),b.preventDefault()):-1&lt;e.inArray(g,c.prev)&amp;&amp;(a.prev(),b.preventDefault())}),e.fn.mousewheel&amp;&amp;b.mouseWheel&amp;&amp;1&lt;a.group.length&amp;&amp;a.wrap.bind(&quot;mousewheel.fb&quot;,function(b,c){var f=e(b.target).get(0);if(0===f.clientHeight||f.scrollHeight===f.clientHeight&amp;&amp;f.scrollWidth===f.clientWidth)b.preventDefault(),a[0&lt;c?&quot;prev&quot;:&quot;next&quot;]()}))},trigger:function(b){var c,d=a[-1&lt;e.inArray(b,[&quot;onCancel&quot;,</div><div class='line' id='LC12'>&quot;beforeLoad&quot;,&quot;afterLoad&quot;])?&quot;coming&quot;:&quot;current&quot;];if(d){e.isFunction(d[b])&amp;&amp;(c=d[b].apply(d,Array.prototype.slice.call(arguments,1)));if(!1===c)return!1;d.helpers&amp;&amp;e.each(d.helpers,function(c,f){if(f&amp;&amp;&quot;undefined&quot;!==typeof a.helpers[c]&amp;&amp;e.isFunction(a.helpers[c][b]))a.helpers[c][b](f,d)});e.event.trigger(b+&quot;.fb&quot;)}},isImage:function(a){return a&amp;&amp;a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&amp;&amp;a.match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},d=a.group[b]||null,g,f,k;if(&quot;object&quot;===</div><div class='line' id='LC13'>typeof d&amp;&amp;(d.nodeType||d instanceof e))g=!0,e.metadata&amp;&amp;(c=e(d).metadata());c=e.extend(!0,{},a.opts,{index:b,element:d},e.isPlainObject(d)?d:c);e.each([&quot;href&quot;,&quot;title&quot;,&quot;content&quot;,&quot;type&quot;],function(b,f){c[f]=a.opts[f]||g&amp;&amp;e(d).attr(f)||c[f]||null});if(&quot;number&quot;===typeof c.margin)c.margin=[c.margin,c.margin,c.margin,c.margin];c.modal&amp;&amp;e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:&quot;auto&quot;},closeClick:!1}}});a.coming=c;if(!1===a.trigger(&quot;beforeLoad&quot;))a.coming=</div><div class='line' id='LC14'>null;else{f=c.type;b=c.href;if(!f)g&amp;&amp;(k=e(d).data(&quot;fancybox-type&quot;),!k&amp;&amp;d.className&amp;&amp;(f=(k=d.className.match(/fancybox\.(\w+)/))?k[1]:null)),!f&amp;&amp;b&amp;&amp;(a.isImage(b)?f=&quot;image&quot;:a.isSWF(b)?f=&quot;swf&quot;:b.match(/^#/)&amp;&amp;(f=&quot;inline&quot;)),f||(f=g?&quot;inline&quot;:&quot;html&quot;),c.type=f;&quot;inline&quot;===f||&quot;html&quot;===f?(c.content=c.content||(&quot;inline&quot;===f&amp;&amp;b?e(b):e(d)),c.content.length||(f=null)):(c.href=b||d,c.href||(f=null));c.group=a.group;&quot;image&quot;===f?a._loadImage():&quot;ajax&quot;===f?a._loadAjax():f?a._afterLoad():a._error(&quot;type&quot;)}},_error:function(b){e.extend(a.coming,</div><div class='line' id='LC15'>{type:&quot;html&quot;,autoSize:!0,minHeight:&quot;0&quot;,hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){a.imgPreload=new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error(&quot;image&quot;)};a.imgPreload.src=a.coming.href;a.imgPreload.complete||a.showLoading()},_loadAjax:function(){a.showLoading();a.ajaxLoad=e.ajax(e.extend({},a.coming.ajax,</div><div class='line' id='LC16'>{url:a.coming.href,error:function(b,c){&quot;abort&quot;!==c?a._error(&quot;ajax&quot;,b):a.hideLoading()},success:function(b,c){if(&quot;success&quot;===c)a.coming.content=b,a._afterLoad()}}))},_preload:function(){var b=a.group,c=a.current.index,d=function(b){if(b&amp;&amp;a.isImage(b))(new Image).src=b};1&lt;b.length&amp;&amp;(d(e(b[c+1]||b[0]).attr(&quot;href&quot;)),d(e(b[c-1]||b[b.length-1]).attr(&quot;href&quot;)))},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger(&quot;afterLoad&quot;,a.current)?a.coming=!1:(a.isOpened?(e(&quot;.fancybox-item&quot;).remove(),a.wrap.stop(!0).removeClass(&quot;fancybox-opened&quot;),</div><div class='line' id='LC17'>a.inner.css(&quot;overflow&quot;,&quot;hidden&quot;),a.transitions[a.current.prevMethod]()):(e(&quot;.fancybox-wrap&quot;).stop().trigger(&quot;onReset&quot;).remove(),a.trigger(&quot;afterClose&quot;)),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.coming=!1,a.wrap=e(a.current.tpl.wrap).addClass(&quot;fancybox-tmp &quot;+a.current.wrapCSS).appendTo(&quot;body&quot;),a.outer=e(&quot;.fancybox-outer&quot;,a.wrap).css(&quot;padding&quot;,a.current.padding+&quot;px&quot;),a.inner=e(&quot;.fancybox-inner&quot;,a.wrap),a._setContent())},_setContent:function(){var b,c,d=a.current,g=d.type;switch(g){case &quot;inline&quot;:case &quot;ajax&quot;:case &quot;html&quot;:b=</div><div class='line' id='LC18'>d.content;&quot;inline&quot;===g&amp;&amp;b instanceof e&amp;&amp;(b=b.show().detach(),b.parent().hasClass(&quot;fancybox-inner&quot;)&amp;&amp;b.parents(&quot;.fancybox-wrap&quot;).trigger(&quot;onReset&quot;).remove(),e(a.wrap).bind(&quot;onReset&quot;,function(){b.appendTo(&quot;body&quot;).hide()}));if(d.autoSize)c=e('&lt;div class=&quot;fancybox-tmp&quot;&gt;&lt;/div&gt;').appendTo(&quot;body&quot;).append(b),d.width=c.outerWidth(),d.height=c.outerHeight(!0),b=c.contents().detach(),c.remove();break;case &quot;image&quot;:b=d.tpl.image.replace(&quot;{href}&quot;,d.href);d.aspectRatio=!0;break;case &quot;swf&quot;:b=d.tpl.swf.replace(/\{width\}/g,</div><div class='line' id='LC19'>d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href)}if(&quot;iframe&quot;===g){if(d.scrolling=&quot;auto&quot;,b=e(d.tpl.iframe.replace(&quot;{rnd}&quot;,(new Date).getTime())).attr({scrolling:d.scrolling,src:d.href}).appendTo(a.inner),d.autoSize){a.wrap.width(d.width);a.showLoading();b.data(&quot;ready&quot;,!1).bind(&quot;load&quot;,function(){var b=e(this),c;try{this.contentWindow.document.location&amp;&amp;(c=b.contents().find(&quot;body&quot;).height()+12,b.height(c))}catch(g){d.autoSize=!1}if(!1==b.data(&quot;ready&quot;)){a.hideLoading();if(c)a.current.height=</div><div class='line' id='LC20'>c;a._beforeShow();b.data(&quot;ready&quot;,!0)}else c&amp;&amp;a.update()});return}}else{if(&quot;image&quot;===g||&quot;swf&quot;===g)d.autoSize=!1,d.scrolling=&quot;visible&quot;;a.inner.append(b)}a._beforeShow()},_beforeShow:function(){a.trigger(&quot;beforeShow&quot;);a._setDimension();a.wrap.hide().removeClass(&quot;fancybox-tmp&quot;);a.bindEvents();a._preload();a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]()},_setDimension:function(){var b=a.wrap,c=a.outer,d=a.inner,g=a.current,f=a.getViewport(),k=g.margin,i=2*g.padding,h=g.width,j=g.height,</div><div class='line' id='LC21'>o=g.maxWidth,m=g.maxHeight,n=g.minWidth,p=g.minHeight,l;f.w-=k[1]+k[3];f.h-=k[0]+k[2];-1&lt;h.toString().indexOf(&quot;%&quot;)&amp;&amp;(h=(f.w-i)*parseFloat(h)/100);-1&lt;j.toString().indexOf(&quot;%&quot;)&amp;&amp;(j=(f.h-i)*parseFloat(j)/100);k=h/j;h+=i;j+=i;g.fitToView&amp;&amp;(o=Math.min(f.w,o),m=Math.min(f.h,m));n=Math.min(h,n);p=Math.min(h,p);o=Math.max(n,o);m=Math.max(p,m);g.aspectRatio?(h&gt;o&amp;&amp;(h=o,j=(h-i)/k+i),j&gt;m&amp;&amp;(j=m,h=(j-i)*k+i),h&lt;n&amp;&amp;(h=n,j=(h-i)/k+i),j&lt;p&amp;&amp;(j=p,h=(j-i)*k+i)):(h=Math.max(n,Math.min(h,o)),j=Math.max(p,Math.min(j,m)));</div><div class='line' id='LC22'>h=Math.round(h);j=Math.round(j);e(b.add(c).add(d)).width(&quot;auto&quot;).height(&quot;auto&quot;);d.width(h-i).height(j-i);b.width(h);l=b.height();if(h&gt;o||l&gt;m)for(;(h&gt;o||l&gt;m)&amp;&amp;h&gt;n&amp;&amp;l&gt;p;)j-=10,g.aspectRatio?(h=Math.round((j-i)*k+i),h&lt;n&amp;&amp;(h=n,j=(h-i)/k+i)):h-=10,d.width(h-i).height(j-i),b.width(h),l=b.height();g.dim={width:h,height:l};g.canGrow=g.autoSize&amp;&amp;j&gt;p&amp;&amp;j&lt;m;g.canShrink=!1;g.canExpand=!1;if(h-i&lt;g.width||j-i&lt;g.height)g.canExpand=!0;else if((h&gt;f.w||l&gt;f.h)&amp;&amp;h&gt;n&amp;&amp;j&gt;p)g.canShrink=!0;b=l-i;a.innerSpace=b-d.height();</div><div class='line' id='LC23'>a.outerSpace=b-c.height()},_getPosition:function(b){var c=a.current,d=a.getViewport(),e=c.margin,f=a.wrap.width()+e[1]+e[3],k=a.wrap.height()+e[0]+e[2],i={position:&quot;absolute&quot;,top:e[0]+d.y,left:e[3]+d.x};if(c.fixed&amp;&amp;(!b||!1===b[0])&amp;&amp;k&lt;=d.h&amp;&amp;f&lt;=d.w)i={position:&quot;fixed&quot;,top:e[0],left:e[3]};i.top=Math.ceil(Math.max(i.top,i.top+(d.h-k)*c.topRatio))+&quot;px&quot;;i.left=Math.ceil(Math.max(i.left,i.left+0.5*(d.w-f)))+&quot;px&quot;;return i},_afterZoomIn:function(){var b=a.current,c=b.scrolling;a.isOpen=a.isOpened=!0;a.wrap.addClass(&quot;fancybox-opened&quot;).css(&quot;overflow&quot;,</div><div class='line' id='LC24'>&quot;visible&quot;);a.update();a.inner.css(&quot;overflow&quot;,&quot;yes&quot;===c?&quot;scroll&quot;:&quot;no&quot;===b.scrolling?&quot;hidden&quot;:c);if(b.closeClick||b.nextClick)a.inner.css(&quot;cursor&quot;,&quot;pointer&quot;).bind(&quot;click.fb&quot;,b.nextClick?a.next:a.close);b.closeBtn&amp;&amp;e(b.tpl.closeBtn).appendTo(a.wrap).bind(&quot;click.fb&quot;,a.close);b.arrows&amp;&amp;1&lt;a.group.length&amp;&amp;((b.loop||0&lt;b.index)&amp;&amp;e(b.tpl.prev).appendTo(a.wrap).bind(&quot;click.fb&quot;,a.prev),(b.loop||b.index&lt;a.group.length-1)&amp;&amp;e(b.tpl.next).appendTo(a.wrap).bind(&quot;click.fb&quot;,a.next));a.trigger(&quot;afterShow&quot;);if(a.opts.autoPlay&amp;&amp;</div><div class='line' id='LC25'>!a.player.isActive)a.opts.autoPlay=!1,a.play()},_afterZoomOut:function(){a.trigger(&quot;afterClose&quot;);a.wrap.trigger(&quot;onReset&quot;).remove();e.extend(a,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions={getOrigPosition:function(){var b=a.current.element,c={},d=50,g=50,f;b&amp;&amp;b.nodeName&amp;&amp;e(b).is(&quot;:visible&quot;)?(f=e(b).find(&quot;img:first&quot;),f.length?(c=f.offset(),d=f.outerWidth(),g=f.outerHeight()):c=e(b).offset()):(b=a.getViewport(),c.top=b.y+0.5*(b.h-</div><div class='line' id='LC26'>g),c.left=b.x+0.5*(b.w-d));return c={top:Math.ceil(c.top)+&quot;px&quot;,left:Math.ceil(c.left)+&quot;px&quot;,width:Math.ceil(d)+&quot;px&quot;,height:Math.ceil(g)+&quot;px&quot;}},step:function(b,c){var d,e,f;if(&quot;width&quot;===c.prop||&quot;height&quot;===c.prop)e=f=Math.ceil(b-2*a.current.padding),&quot;height&quot;===c.prop&amp;&amp;(d=(b-c.start)/(c.end-c.start),c.start&gt;c.end&amp;&amp;(d=1-d),e-=a.innerSpace*d,f-=a.outerSpace*d),a.inner[c.prop](e),a.outer[c.prop](f)},zoomIn:function(){var b=a.wrap,c=a.current,d,g;d=c.dim;if(&quot;elastic&quot;===c.openEffect){g=e.extend({},d,a._getPosition(!0));</div><div class='line' id='LC27'>delete g.position;d=this.getOrigPosition();if(c.openOpacity)d.opacity=0,g.opacity=1;b.css(d).show().animate(g,{duration:c.openSpeed,easing:c.openEasing,step:this.step,complete:a._afterZoomIn})}else b.css(e.extend({},d,a._getPosition())),&quot;fade&quot;===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn())},zoomOut:function(){var b=a.wrap,c=a.current,d;if(&quot;elastic&quot;===c.closeEffect){&quot;fixed&quot;===b.css(&quot;position&quot;)&amp;&amp;b.css(a._getPosition(!0));d=this.getOrigPosition();if(c.closeOpacity)d.opacity=</div><div class='line' id='LC28'>0;b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})}else b.fadeOut(&quot;fade&quot;===c.closeEffect?c.closeSpeed:0,a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;&quot;elastic&quot;===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+&quot;px&quot;,b.css(d).show().animate({opacity:1,top:&quot;+=200px&quot;},{duration:c.nextSpeed,complete:a._afterZoomIn})):(b.css(a._getPosition()),&quot;fade&quot;===c.nextEffect?b.hide().fadeIn(c.nextSpeed,a._afterZoomIn):</div><div class='line' id='LC29'>(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,d=function(){e(this).trigger(&quot;onReset&quot;).remove()};b.removeClass(&quot;fancybox-opened&quot;);&quot;elastic&quot;===c.prevEffect?b.animate({opacity:0,top:&quot;+=200px&quot;},{duration:c.prevSpeed,complete:d}):b.fadeOut(&quot;fade&quot;===c.prevEffect?c.prevSpeed:0,d)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);e.browser.msie?(a=Math.max(q.documentElement.scrollWidth,q.body.scrollWidth),c=Math.max(q.documentElement.offsetWidth,</div><div class='line' id='LC30'>q.body.offsetWidth),a=a&lt;c?l.width():a):a=r.width();this.overlay.width(a).height(r.height())},beforeShow:function(b){if(!this.overlay)b=e.extend(!0,{speedIn:&quot;fast&quot;,closeClick:!0,opacity:1,css:{background:&quot;black&quot;}},b),this.overlay=e('&lt;div id=&quot;fancybox-overlay&quot;&gt;&lt;/div&gt;').css(b.css).appendTo(&quot;body&quot;),this.update(),b.closeClick&amp;&amp;this.overlay.bind(&quot;click.fb&quot;,a.close),l.bind(&quot;resize.fb&quot;,e.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn,b.opacity)},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&amp;&amp;</div><div class='line' id='LC31'>this.overlay.fadeOut(a.speedOut||&quot;fast&quot;,function(){e(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=e('&lt;div class=&quot;fancybox-title fancybox-title-'+b.type+'-wrap&quot;&gt;'+c+&quot;&lt;/div&gt;&quot;).appendTo(&quot;body&quot;),&quot;float&quot;===b.type&amp;&amp;(c.width(c.width()),c.wrapInner('&lt;span class=&quot;child&quot;&gt;&lt;/span&gt;'),a.current.margin[2]+=Math.abs(parseInt(c.css(&quot;margin-bottom&quot;),10))),c.appendTo(&quot;over&quot;===b.type?a.inner:&quot;outside&quot;===b.type?a.wrap:a.outer)}};e.fn.fancybox=function(b){var c=</div><div class='line' id='LC32'>b||{},d=e(this),g=this.selector||&quot;&quot;,b=function(b){var k=this,i=0,h=&quot;rel&quot;,j=this.rel;!b.ctrlKey&amp;&amp;!b.altKey&amp;&amp;!b.shiftKey&amp;&amp;!b.metaKey&amp;&amp;(b.preventDefault(),j||(h=&quot;data-fancybox-group&quot;,j=e(this).data(&quot;fancybox-group&quot;)),j&amp;&amp;&quot;&quot;!==j&amp;&amp;&quot;nofollow&quot;!==j&amp;&amp;(k=g.length?e(g):d,k=k.filter(&quot;[&quot;+h+'=&quot;'+j+'&quot;]'),i=k.index(this)),a.open(k,c,i))};g?r.undelegate(g,&quot;click.fb-start&quot;).delegate(g,&quot;click.fb-start&quot;,b):e(this).unbind(&quot;click.fb-start&quot;).bind(&quot;click.fb-start&quot;,b);return this}})(window,document,jQuery);</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/fancyapps/fancyBox/tree-list/81816a2cbab1d1b003133c05962e76239c5958c1" data-blob-url-prefix="/fancyapps/fancyBox/blob/81816a2cbab1d1b003133c05962e76239c5958c1">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif?1315867479" height="32" width="32">
</div>

      </div>
    </div>


      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Analyze web traffic</a></li>
         <li><a href="http://speakerdeck.com">Speakerdeck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.09433s from fe9.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div class="context-overlay"></div>

    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    
    
    
  </body>
</html>

