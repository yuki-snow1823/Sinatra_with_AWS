require 'sinatra'

configure {
  set :server, :puma
}

class Pumatra < Sinatra::Base
  get '/hello' do
    return 'hello pumatra!'
  end

  run! if app_file == $0
end