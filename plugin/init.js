$(function(){
	
	var pageQuestions = $('#questions').length > 0;
	var pageMailbox = $('#p_mailbox').length > 0;
	var pageProfile = true;

	

	_OKCP.getAnswers();
	// question suggestion feature
	if (pageQuestions) _OKCP.initSuggestQuestionsFeature();
	// re-adding pagination on questions and mailbox pages
	if (pageQuestions || pageMailbox) _OKCP.initReaddPagination();

});
