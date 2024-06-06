import request  from "@/utils/request"

enum API {
    CARD_DATA_URL= '/home/cardData'
}

export const reqUserInfo = () => request.get(API.CARD_DATA_URL)
