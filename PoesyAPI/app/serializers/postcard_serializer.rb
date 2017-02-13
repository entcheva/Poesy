class PostcardSerializer < ActiveModel::Serializer
  attributes :id, :poem, :image_url
end
