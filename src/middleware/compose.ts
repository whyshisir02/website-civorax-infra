import { NextRequest, NextResponse } from "next/server";

type MiddlewareFn = (request: NextRequest) => NextResponse | null | Promise<NextResponse | null>;

/**
 * Composes multiple middleware functions. Each runs in order;
 * the first non-null response short-circuits the chain.
 */
export function composeMiddleware(...middlewares: MiddlewareFn[]) {
  return async (request: NextRequest): Promise<NextResponse | null> => {
    for (const middleware of middlewares) {
      const result = await middleware(request);
      if (result !== null) return result;
    }
    return null;
  };
}
