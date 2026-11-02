// Q1. How do you architect secure Jwt auth with HTTP-OLY COOKIES and RBAC for full stack apps
// I implement authentication using JWT stored in HTTP-only cookies to reduce XSS token exposure and avoid storing tokens in localStorage.
// On the backend, I create JWT issuance and rotation rules, validating signature, issuer, and expiration on every request using Express middleware.
// For RBAC, I model roles (User/Admin) and attach authorization checks as a layered middleware chain so that authentication and permission logic stay separate.
// I also ensure cookie settings are strict: Secure, SameSite=Strict/Lax depending on cross-site needs, and short token lifetimes to reduce replay risk.
// During development, I use consistent error responses and standardized status codes so frontend flows don’t leak internal details.
// In projects, I’ve built RBAC dashboards with role-based protected routes and admin-only CMS actions, and I keep the UI aligned with backend authorization.
// For production reliability, I test critical flows with tools like Supertest and Postman, and I validate edge cases like expired tokens, revoked sessions, and missing cookies.
// Lastly, I log security-relevant events (login attempts, permission denials) with enough context for incident response, while avoiding sensitive payloads in logs.

// Q2. Explain how you desgin REST APIs with type safety using zod schemas and monorepo workflow?
// I design REST APIs so that request/response contracts are explicitly validated and shared across services using Zod schemas.
// In my workflow, I keep a scalable monorepo architecture, so the same schema definitions power frontend forms, backend route validation, and end-to-end typing.
// This prevents subtle drift where the UI expects one shape but the API returns another, which is common when teams evolve quickly.
// On the backend, I validate incoming payloads in route handlers, ensuring I reject invalid data early with clear validation errors.
// For responses, I also structure outputs according to schemas, which improves reliability and reduces client-side defensive coding.
// In the frontend, I use shared types to build strongly-typed API clients, so compilation catches integration issues before deployment.
// When I had to modernize and stabilize an existing app, I focused on restoring authentication flows and API communication reliability by tightening contracts.
// Monorepo workflows also help me standardize linting, formatting, and CI/CD steps, so the same quality gates apply everywhere.
// I treat schema evolution carefully: version changes, backward-compatible fields, and controlled rollouts, so users don’t break during updates.
// Overall, I optimize for correctness first, then developer velocity, because type safety reduces production-critical surprises.

// Q3. Describe your Real-time architecture using socket.io, Redis and state management zustand?
// These tools I used in my disasterwatch because it is a Real-TIme alert system I want something that can trigger alerts with low latency so that users can notify as soon as possible.
// For Real-Time Alerts I used Socket.io because it doesn't require too much configuration just write 3-4 four lines and it's done. My application is not that big so according to me its more than enough.
// I used Redis so that users can get data on portal with hitting the database every time they refresh the page.
// Zustand is mid-level state management tool I used is becasue I want to provide alerts on multiple locations in my frontend with hitting API every time to show data on UI.

// Q4. How do you debug and eliminate frontend 404 routing errors with Vite reverse Proxy changes?
// Q5. How do you handle caching with Redis and Zustand/Context to reduce redundant database load?

// Q6. How do you design REST APIs in Node.js with TypeScript for scalability and maintainability?
// I start by defining clear resource boundaries and request/response contracts, then model the API shape in TypeScript so changes are caught at compile time. I typically design endpoints around business workflows—e.g., auth, admin operations, and data retrieval—ensuring consistent naming, status codes, and error payloads.
// For maintainability, I structure the Express app in layers: routes/controllers for orchestration, service functions for business logic, and repository/data access helpers for database operations. This separation makes it easier to debug issues and evolve features without breaking other modules.
// I also focus heavily on authentication and authorization boundaries. I implement JWT-based security and ensure protected endpoints enforce RBAC rules consistently. When authorization bugs appear, I audit the middleware chain end-to-end and add test coverage around the failing path.
// To scale, I handle performance considerations early: pagination for list endpoints, minimizing redundant DB queries, and using caching when appropriate. In real-time components, I make sure REST endpoints and Socket event handlers don’t duplicate logic; instead they share service-level functions.
// For reliability, I include automated tests using tools like Supertest for API testing and Vitest for unit/integration tests. I use Postman/requests to validate edge cases locally, then ensure CI runs the same checks before deployment.
// Finally, I document assumptions and contracts and enforce runtime validation (for example, shared schema definitions) so frontend-backend mismatches don’t become production incidents. This approach helped me modernize legacy flows and stabilize production deployments quickly.

// Q7. Describe a challenging production bug you debugged; what data, logs, and steps did you use?
// I approach production debugging systematically: reproduce the failure with the exact request parameters, inspect logs around the failing window, and isolate whether the bug is in routing, authorization, data access, or serialization.
// One type of issue I frequently handle is broken request routing and mismatched frontend-to-backend paths. When I encountered persistent API-related errors after modernization, I traced the network requests, confirmed the expected URL, then checked build-time and runtime routing layers. I validated environment variables and reverse proxy behavior so requests reliably reach the correct Express handlers.
// Next, I verify middleware execution order. For auth failures, I check JWT verification, cookie parsing (when tokens are in HTTP-only cookies), and RBAC logic that decides user capabilities. I then validate the database state that authorization depends on, ensuring the correct user roles and linked records exist.
// After isolating the root cause, I implement a fix plus prevention: e.g., centralized error handling, consistent route registration, and automated tests that cover the problematic request. I prefer changes that reduce future ambiguity—like schema-based validation and shared request contracts.
// In my recent work, I also stabilized legacy production behavior by reverse-engineering hashing logic and reseeding data in a controlled way. That involved confirming the expected salted SHA-256 approach, validating stored hashes, and verifying admin access end-to-end after deployment.
// Overall, I combine concrete evidence—logs, request traces, and database inspection—with incremental changes and targeted tests. That way, debugging becomes predictable rather than guesswork, and the fix ships with confidence.

// Q8. How do you implement authentication and authorization using JWT while reducing XSS and CSRF risks?
// I implement authentication with JWT but I’m careful about token storage and threat models. Instead of exposing tokens to JavaScript, I store JWTs in HTTP-only cookies. This reduces XSS-based token theft because scripts can’t read those cookies directly.
// On the backend, I verify JWT signatures and validate claims on each protected request. I also enforce fine-grained authorization using role-based access control, so “authenticated” doesn’t automatically mean “allowed.” Authorization checks happen at the middleware layer consistently across protected endpoints.
// For CSRF risk, I rely on cookie-based patterns with appropriate request validation. Practically, I ensure the frontend sends requests in a safe way, and I configure CORS and cookie attributes properly. I also make sure my API rejects unexpected origins and uses secure cookie flags in production.
// In the React app, I design the auth flow so UI state derives from authenticated session checks, not from untrusted client-side assumptions. If an endpoint fails authorization, the UI handles it gracefully and triggers re-auth or role-specific behavior.
// I also add testing around auth boundaries: verifying endpoints return correct status codes for unauthenticated users, authenticated but unauthorized roles, and authorized requests. This helps catch permission regressions during refactors.
// When modernizing legacy authentication flows, I validate real users and admin access end-to-end, including password hashing and reseeding logic if needed. That prevents “works in dev” failures from turning into production lockouts.
// By combining HTTP-only cookies, strict server-side validation, RBAC middleware discipline, secure CORS/cookie configuration, and automated tests, I build an auth system that’s both robust and secure.

