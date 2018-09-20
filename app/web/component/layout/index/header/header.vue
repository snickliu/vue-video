<template>
<div>
  	<!--////////////////////////////////////Header-->
	<header>
		<div class="wrap-header">
			<div class="zerogrid">
				<div class="row">
					<a href="index.html" class="logo"><img src="../../../../asset/images/logo.png" /></a>
					<ul class="quick-link">
						<li><a href="#" title="Upload Video"><i class="fa fa-upload"></i></a></li>
						<li><a href="#" title="Log in"><i class="fa fa-user"></i></a></li>
						<li><a href="#" title="Warning"><i class="fa fa-bell"></i></a></li>
					</ul>
					<ul class="social">
						<li><a href="#"><i class="fa fa-twitter"></i></a></li>
						<li><a href="#"><i class="fa fa-facebook"></i></a></li>
						<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
						<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
						<li><a href="#"><i class="fa fa-instagram"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="zerogrid">
				<div class="row">
					<span>Welcome to Us - Contact Us at <a href="contact.html">HERE</a></span>
				</div>
			</div>
		</div>
    </header>
	<!--////////////////////////////////////Menu-->
	<a href="#" class="nav-toggle">Toggle Navigation</a>
    <nav class="cmn-tile-nav">
		<ul class="clearfix">
			<li class="colour-1"><a href="gallery.html">Top News</a></li>
			<li class="colour-2"><a href="gallery.html">Sport</a></li>
			<li class="colour-3"><a href="gallery.html">Music</a></li>
			<li class="colour-4"><a href="gallery.html">TV Show</a></li>
			<li class="colour-5"><a href="gallery.html">Cartoons</a></li>
			<li class="colour-6"><a href="gallery.html">Tech</a></li>
			<li class="colour-7"><a href="gallery.html">iOS</a></li>
			<li class="colour-8"><a href="gallery.html">More</a></li>
		</ul>
    </nav>
    <!-- <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header page-scroll">
                <button type="button" @click="menuBtn" class="navbar-toggle" :class="{ 'collapsed': collapsed }" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">V-Happy</a>
            </div>
            <div class="collapse navbar-collapse" :class="{ 'collapse in': collapsed }" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">{{$t('menu.home')}}</a>
                    </li>
                    <li>
                        <a href="/category">{{$t('menu.category')}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="intro-header" style="background-color:#3c763d;">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <div class="site-heading">
                        <div>
                            <img src="../../../../asset/images/loading.gif" width="80px" height="80px" style="display: inline">
                        </div>
                        <h1>。。。。。</h1>
                        <hr class="large">
                        <span class="subheading">。。。。。</span>
                    </div>
                </div>
            </div>
        </div>
    </header> -->
</div>
</template>
<script type="babel">
import "./header.scss";
export default {
  components: {},
  data() {
    return {
      collapsed: false
    };
  },
  computed: {},
  methods: {
    menuBtn() {
      this.collapsed = !this.collapsed;
    }
  },
  mounted() {}
};
</script>
