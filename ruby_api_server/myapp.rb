require 'sinatra'
require 'sinatra/cross_origin'

configure {
  set :server, :puma
}

configure do
  enable :cross_origin
end

class Pumatra < Sinatra::Base

  get '/' do
    return 'hello pumatra!'
  end
  # 固定のjson返す
  # awsへアップ
  # ローカルで叩く
  run! if app_file == $0
end