export const ERROR_NAME = {
  // 데이터 검증 실패
  VALIDATION: "Validation Error",

  // 요청 시간 초과
  TIMEOUT: "Timeout Error",

  // 인증 실패
  AUTHENTICATION: "Authentication Error",

  // 네트워크 에러
  NETWORK: "Network Error",

  // 서버 내부 에러
  INTERNAL_SERVER: "Internal Server Error",

  // 권한 없음
  UNAUTHORIZED: "Unauthorized",

  // 접근 금지
  FORBIDDEN: "Forbidden",

  // 리소스 찾을 수 없음
  NOT_FOUND: "Not Found",

  // HTTP 메서드 허용 안됨
  METHOD_NOT_ALLOWED: "Method Not Allowed",

  // 충돌 (일반적으로 중복 요청)
  CONFLICT: "Conflict",

  // 지원하지 않는 미디어 타입
  UNSUPPORTED_MEDIA_TYPE: "Unsupported Media Type",

  // 요청 제한 도달
  RATE_LIMIT_REACHED: "Rate Limit Reached",

  // 필수 매개변수 누락
  MISSING_PARAMETERS: "Missing Parameters",

  // 데이터베이스 연결 에러
  DATABASE_CONNECTION: "Database Connection Error",

  // 중복 항목
  DUPLICATE_ENTRY: "Duplicate Entry",

  // 결제 필요
  PAYMENT_REQUIRED: "Payment Required",

  // Bad Gateway
  BAD_GATEWAY: "Bad Gateway",

  // 서비스 사용 불가
  SERVICE_UNAVAILABLE: "Service Unavailable",

  // 게이트웨이 시간 초과
  GATEWAY_TIMEOUT: "Gateway Timeout",
};

export const ERROR_CODE = {
  // 400: 잘못된 요청
  VALIDATION: 400,

  // 408: 요청 시간 초과
  TIMEOUT: 408,

  // 401: 권한 없음
  AUTHENTICATION: 401,

  // 503: 서비스 사용 불가
  NETWORK: 503,

  // 500: 서버 내부 에러
  INTERNAL_SERVER: 500,

  // 401: 권한 없음
  UNAUTHORIZED: 401,

  // 403: 접근 금지
  FORBIDDEN: 403,

  // 404: 찾을 수 없음
  NOT_FOUND: 404,

  // 405: 메서드 허용 안됨
  METHOD_NOT_ALLOWED: 405,

  // 409: 충돌
  CONFLICT: 409,

  // 415: 지원하지 않는 미디어 타입
  UNSUPPORTED_MEDIA_TYPE: 415,

  // 429: 너무 많은 요청
  RATE_LIMIT_REACHED: 429,

  // 422: 처리할 수 없는 엔티티
  MISSING_PARAMETERS: 422,

  // 500: 서버 내부 에러
  DATABASE_CONNECTION: 500,

  // 409: 충돌
  DUPLICATE_ENTRY: 409,

  // 402: 결제 필요
  PAYMENT_REQUIRED: 402,

  // 502: Bad Gateway
  BAD_GATEWAY: 502,

  // 503: 서비스 사용 불가
  SERVICE_UNAVAILABLE: 503,

  // 504: 게이트웨이 시간 초과
  GATEWAY_TIMEOUT: 504,
};
