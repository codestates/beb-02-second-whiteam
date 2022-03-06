### /signin (POST)

Read user information by user name

- **Request**

```json
{
  "user_email": "가나다@naver.com"
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

### /collection (GET)

Read all collection

- **Response**

```json
[
  {
    "id": 1,
    "collection_name": "가나다",
    "collection_symbol": "가나다",
    "contract_addr": "0x123...",
    "creator": "0x123...",
    "created_at": "2022-01-01T00:00:00.000Z",
    "updated_at": "2022-01-01T00:00:00.000Z",
    "deleted_at": "2022-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "collection_name": "가나다",
    "collection_symbol": "가나다",
    "contract_addr": "0x123...",
    "creator": "0x123...",
    "created_at": "2022-01-01T00:00:00.000Z",
    "updated_at": "2022-01-01T00:00:00.000Z",
    "deleted_at": "2022-01-01T00:00:00.000Z"
  },
	...
]
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

### /nft (GET)

Read all NFT

- **Response**

```json
[
	{
		"id": 1,
		"collection_id": 1,
		"owner": "0x123...",
		"token_id": 1,
		"nft_name": "가나다",
		"nft_description": "가나다",
		"image_uri": "https://ipfs.io/ipfs/abcdefg...",
		"created_at": "2022-01-01T00:00:00.000Z",
		"updated_at": "2022-01-01T00:00:00.000Z",
		"deleted_at": "2022-01-01T00:00:00.000Z"
	},
	{
		"id": 2,
		"collection_id": 1,
		"owner": "0x123...",
		"token_id": 2,
		"nft_name": "가나다",
		"nft_description": "가나다",
		"image_uri": "https://ipfs.io/ipfs/abcdefg...",
		"created_at": "2022-01-01T00:00:00.000Z",
		"updated_at": "2022-01-01T00:00:00.000Z",
		"deleted_at": "2022-01-01T00:00:00.000Z"
	},
	...
]
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
