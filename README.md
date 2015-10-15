# secure-table
table of which each column is encrypted symmetrically by different key
under humanitarian-agpl-license http://namzezam.wikidot.com/humanitarian-agpl-license
Each column is encrypted symmetrically by different key and each request(query [, pubkey, process]), such that  when it is used with pubkey it returns result encrypted with the pubkey, so that request can be made  in another process by  another  device or service. When the quarry is of the key of the table it reruns the encrypted record together with its defination including id of proces. this way the key can be totally separated. Then in return the definition of each field encrypted ny key of the ley and the request is send with pub key of the request to different process to decrypt and encrypt for the the request.
