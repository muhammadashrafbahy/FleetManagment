package grad.api.validation;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class companyEmail_AlreadyExist extends RuntimeException {

	public companyEmail_AlreadyExist(String exception) {
		super(exception);
		
		
		
		
		
		
		
	}

	
	
}
