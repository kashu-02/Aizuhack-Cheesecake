require "csv"
require "json"

sites = CSV.read("./ohistricsite.csv")[1..]
# name,name_kana,site_url,catchphrase,description,area,postcode,address,tel,contact,business_hours,regular_holiday/business_holiday,fee,offical_url,access,parking_lot,barrier_free,kankonavi,memo,lat,lng

maps = sites.map{|site|
    {
        "answer_name": site[0],
        "problem_statement": site[3],
        "answer_description": site[4],
        "answer_latitude": site[19].to_f,
        "answer_longitude": site[20].to_f,
    }
}

puts JSON.pretty_generate(maps)
