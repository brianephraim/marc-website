import React from 'react'
import { Text, View } from 'react-native'
import PageLayout from '../PageLayout';
import StyleSheet from '../StyleSheet';
import Link from '../gatsby-link'

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    maxWidth: 1000,
    alignItems: 'flex-start',
    marginVertical: 30,
    marginHorizontal: 30,
  },
  title: {
    fontFamily: 'HeaderFont',
    fontSize: 25,
    fontWeight: 'bold',
    color: '$color5',
    textAlign:'center',
    paddingBottom:10,
    marginTop:20,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '$color4',
  },
  formContainer: {
    width: 600,
  },

})
const htmlForm = `
<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
<form action="https://goldshif.us2.list-manage.com/subscribe/post?u=711f64f13a4f2b1558a21ce82&amp;id=5520a51d18" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">

<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
<div class="mc-field-group">
	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
</div>
	<div id="mce-responses" class="clear">
		<div class="response" id="mce-error-response" style="display:none"></div>
		<div class="response" id="mce-success-response" style="display:none"></div>
	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_711f64f13a4f2b1558a21ce82_5520a51d18" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
<!--End mc_embed_signup-->
`
const dangerouslySetInnerHTMLValue = { __html: htmlForm };
const Newsletter = () => (
  <PageLayout>
    <View style={styles.container}>
      <Text style={styles.title}>JOIN THE MAILING LIST</Text>
      <View
        style={styles.formContainer}
      >
        <div dangerouslySetInnerHTML={dangerouslySetInnerHTMLValue} />
      </View>
    </View>
  </PageLayout>

)

export default Newsletter;