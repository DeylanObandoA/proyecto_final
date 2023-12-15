class ApplicationController < ActionController::API
  include Pundit::Authorization
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  def pundit_user
    AuthorizationContext.new(current_user, current_office)
  end

  private

  def pundishing_user
    flash[:notice] = "You are not authorized to perform this action."
    redirect_to article_path
  end


def configure_permitted_parameters
  attributes = [:name, :age ,:email , :password]
  devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
  devise_parameter_sanitizer.permit(:account_update, keys: attributes)
end

# En tu controlador
def allow_cross_origin_requests
  headers['Access-Control-Allow-Origin'] = 'http://localhost:3001' # Ajusta esto según el origen de tu aplicación React
  headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
  headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
  headers['Access-Control-Max-Age'] = '1728000'
end

end
