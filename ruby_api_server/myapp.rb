require 'sinatra'
require 'sinatra/cross_origin'

configure {
  set :server, :puma
}

class Pumatra < Sinatra::Base
  get '/' do
    cross_origin
    puts "来てる"
    return 'hello pumatra!'
  end
  # 固定のjson返す
  # awsへアップ
  # ローカルで叩く
  register Sinatra::CrossOrigin

  run! if app_file == $0
end