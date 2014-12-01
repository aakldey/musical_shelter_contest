package controllers;

import play.*;
import play.mvc.*;

import views.html.*;
import play.libs.ws.*;
import play.libs.F.Function;
import play.libs.F.Promise;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    public static Promise<Result> getVkBody() {
	    return WS.url("http://vk.com/wkview.php").setQueryParameter("w","shares/wall-49752090_115").get().map(response ->
	        ok(response.getBody())
	    );
	}
}
