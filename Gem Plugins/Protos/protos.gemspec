#% cat hola.gemspec
Gem::Specification.new do |s|
  s.name        = 'Protos'
  s.version     = '0.0.1'
  s.date        = '2014-01-15'
  s.summary     = "A powerful plugin to Ruby documents that handles errors of objects (called Prototypes) by deleting the object itself."
  s.required_ruby_version = '>= 1.8.7'
  s.post_install_message = "Thank you for installing Protos! In Ruby documents, type    require 'protos'    to load the gem. How Protos works: define objects like this:   a = 1.proto     or    you can try a = proto 1. NOw a=1, but one special thing about prototypes is their error handling. If 'a' results in an error, protos will immediately delete 'a', so 'a' will not exist anymore. Thanks!"
  s.requirements << 'Ruby (on macs this is pre-installed) version 1.8.7 or later'
  s.requirements << 'A computer with an Intel processor (not required at all, but will help)'
  s.description = "A powerful plugin to Ruby documents that handles errors of objects (called Prototypes) by deleting the object itself."
  s.authors     = ["ThinkLikeGeek"]
  s.email       = 'tt2d@icloud.com'
  s.files       = ["lib/protos.rb"]
  #s.executables << "sh.rb"
  #s.executables << "gamegrid.rb"
 # s.require_paths=["lib"]
  s.homepage    =
    '#'
  s.license       = 'MIT'
end
