$(document).ready(function() {
    var posts = Data.getPosts();

    var postsJsonTemplateRaw = $("#posts-json-template").html();
    var postsTableTemplateRaw = $("#posts-table-template").html();

    var postsJsonTemplate = Handlebars.compile(postsJsonTemplateRaw);
    var postsTableTemplate = Handlebars.compile(postsTableTemplateRaw);

    Handlebars.registerHelper('json', function (context) {
        return "<pre>" + JSON.stringify(context, null, 2) + "</pre>";
    });

    Handlebars.registerHelper('table', function (context) {
        var output = "<table class='posts-table__table'>";
        var cssClass = "";
        var classNameOdd = "_odd";
        var classNameEven = "_even";
        for(var i=0, j=context.length; i<j; i++) {
            ((i + 1) % 2 == 0) ? cssClass = classNameEven : cssClass = classNameOdd;
            output = output + "<tr><td class='posts-table__cell " + cssClass + "'>" + context[i].description + "</td></tr>";
        }
        return output + "</table>";
    });

    render();

    function render() {
        renderJsonPosts();
        renderTablePosts();
    }

    function renderJsonPosts() {
        var html = postsJsonTemplate({
            posts: posts
        });
        $('.posts-json').html(html);
    }

    function renderTablePosts() {
        var html = postsTableTemplate({
            posts: posts
        });
        $('.posts-table').html(html);
    }
});