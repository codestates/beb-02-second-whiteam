### /signin (POST)

Read user information by user name

- **Request**

```json
{
  "user_name": "가나다"
}
```

- **Response**

```json
{
  "user_name": "가나다",
  "user_email": "가나다@naver.com",
  "user_addr": "0x123...",
  "token_quantity": 1
}
```

### /signup (POST)

Create new user

- **Request**

```json
{
  "user_name": "가나다",
  "user_email": "가나다@naver.com"
}
```

### /collection (POST)

Create new collection

- **Request**

```json
{
  "collection_name": "가나다",
  "collection_symbol": "가나다",
  "creator": "0x123..."
}
```

### /nft (POST)

Create new nft

- **Request**

```json
{
  "collection_id": 1,
  "contract_addr": "0x123...",
  "owner": "0x123...",
  "nft_name": "가나다",
  "nft_description": "가나다",
  "image": "{image}"
}
```

### /nft/transfer (POST)

Update nft owner A to B

- **Request**

```json
{
  "from": "0x123...",
  "to": "0x123...",
  "nft_id": 1,
  "token_id": 1
}
```
