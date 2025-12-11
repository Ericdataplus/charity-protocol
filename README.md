# Charity Protocol 💚

> **Transparent Giving That Actually Helps People**

A community-driven platform where contributors pool funds, vote on what to buy, and watch goods ship directly to verified charities — with zero middlemen, zero waste, and **no cash to anyone**.

---

## 📋 Table of Contents

- [The Vision](#-the-vision)
- [Core Problems We Solve](#-core-problems-we-solve)
- [How It Works](#-how-it-works)
- [Key Design Decisions](#-key-design-decisions)
- [Critical Design: The Money Lockbox](#-critical-design-the-money-lockbox)
- [Technical Architecture](#-technical-architecture)
- [Stablecoin Strategy](#-stablecoin-strategy)
- [Open Questions & Future Work](#-open-questions--future-work)
- [Similar Projects & Differentiation](#-similar-projects--differentiation)
- [Project Structure](#-project-structure)
- [Running the Mockup](#-running-the-mockup)

---

## 🎯 The Vision

Imagine a world where:

1. **You voluntarily contribute** to a shared charity pool
2. **Everyone can see** exactly how much is in the pool (full transparency)
3. **The community votes** on what to buy (true democracy)
4. **Rich people can't dominate** (quadratic voting with diminishing returns)
5. **Money ONLY goes to products** — never cash to anyone, ever
6. **NO ONE can access the money** — not even the founder — only approved vendor purchases
7. **Once started, it runs forever** — no human required

This is **Charity Protocol**: transparent giving that actually helps people.

---

## 💭 The Philosophy

### This Is Not A Company

This is a **protocol**. Like Bitcoin or Ethereum — once deployed, it runs forever without any staff.

- No CEO
- No employees
- No salaries
- No overhead
- No office
- No board meetings

The founder's role: **Write the code. Deploy it. Walk away.**

### This Is Not An Investment

Let's be absolutely clear:
- ❌ There is no token to buy
- ❌ There is no price that goes up
- ❌ You will not make money

This is for **people with kind hearts who want real change in the world.**

Your "return on investment" is knowing you helped someone.

### The Idea Matters More Than This Implementation

Even if this specific project doesn't take off, the **blueprint** matters:

1. ✅ Trustless charity is possible
2. ✅ Quadratic voting can democratize giving
3. ✅ Goods-not-cash prevents waste
4. ✅ Community moderation replaces employees
5. ✅ Smart contracts remove corruption

If someone builds a better version of this, **that's a win**. The goal isn't ownership — it's fixing how the world helps people.

### Putting Existing Pieces Together

Everything here already exists:
- Stablecoins (USDC)
- Smart contracts (Solidity)
- E-commerce APIs (Amazon, Walmart)
- Quadratic voting (Gitcoin proved it)
- Community moderation (Reddit, Discord)

We're just **combining them in a new way** to solve a real problem.

---

## 🔥 Core Problems We Solve

### Problem 1: Traditional Charity Waste
> "I hear a lot of charities take most of the money and never help anyone"

**Our Solution**: **Goods, not cash.** Instead of giving money to a charity (who might waste 80% on "overhead"), we:
- Vote to buy **specific goods** (200 winter coats)
- Order directly from **Amazon/Walmart** via API
- Ship directly to the **verified charity's address**
- Track the package **publicly**

**Result**: 100% of funds become tangible goods. No middleman can take a cut.

### Problem 2: Plutocracy in Voting
> "We don't want a rich person to decide where everything gets allocated"

**Our Solution**: **Quadratic voting with diminishing returns.**

| Contribution | Votes (Linear - Bad) | Votes (Quadratic - Fair) |
|--------------|---------------------|--------------------------|
| $100         | 100 votes           | 10 votes                 |
| $1,000       | 1,000 votes         | 31 votes                 |
| $10,000      | 10,000 votes        | 100 votes                |

Formula: `Votes = √(Contribution in dollars)`

A billionaire can't buy control. Many small voices outweigh one whale.

### Problem 3: Corruption in Execution
> "Don't we still need trusted people to spend the money?"

**Our Solution**: **Trustless auto-execution.**

```
Vote Passes → Smart Contract Releases Funds → Amazon API Called → Goods Shipped
```

No human ever handles the money. The code IS the law.

For edge cases that can't be automated, we can optionally use:
- **AI (Claude API)** as a neutral executor for judgment calls
- **Multi-sig community oversight** as a last resort
- Funded by the treasury itself

### Problem 4: Crypto Volatility
> "It can't be a fluctuating coin, the money pool can't be all over the place"

**Our Solution**: **Stablecoins only.** We use USDC (pegged 1:1 to USD).

$100 today = $100 tomorrow = $100 next year. No volatility.

---

## ⚙️ How It Works

### The Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  CONTRIBUTE │ --> │   PROPOSE   │ --> │    VOTE     │ --> │   EXECUTE   │
│             │     │             │     │             │     │             │
│ Add USDC to │     │ "Buy 200    │     │ Community   │     │ Smart       │
│ the pool    │     │ coats for   │     │ votes with  │     │ contract    │
│             │     │ Ballard     │     │ quadratic   │     │ auto-ships  │
│             │     │ Food Bank"  │     │ system      │     │ via Amazon  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

### Detailed Steps

1. **Contribute**
   - Connect wallet (or traditional payment in future)
   - Deposit USDC to the transparent treasury
   - Receive voting power (√ of contribution)

2. **Propose**
   - Any member can create a proposal
   - Must specify: goods, quantity, vendor, verified recipient
   - Small stake required to prevent spam (refunded if proposal passes)

3. **Vote**
   - 7-day voting window
   - Quadratic voting prevents plutocracy
   - Simple majority (>50%) to pass
   - Can delegate votes to trusted members

4. **Execute**
   - Passed proposal triggers smart contract
   - Contract calls vendor API (Amazon, Walmart, etc.)
   - Order placed with recipient's verified address
   - Tracking number posted publicly
   - Delivery confirmed with photo proof

---

## 🧠 Key Design Decisions

### 1. Goods Over Cash
**Why**: Eliminates charity misuse. 100% of funds become tangible help.

**How**: Direct vendor API integrations. Package tracking for transparency.

### 2. Verified Recipient Registry
**Why**: Not all charities are trustworthy. Need curation.

**How**: Community nominates → Community vets → Trial period → Full verification

**Criteria for verification**:
- Proven track record of helping people
- Physical address verified
- Previous successful deliveries
- High community approval rating

**Examples**: Ballard Food Bank (Seattle), DESC, YouthCare

### 3. Quadratic Voting
**Why**: Prevents wealth-based control while still rewarding contributors.

**Formula**: `Voting Power = √(Total Contribution)`

**Anti-Sybil**: Prevent splitting into many wallets via:
- Proof of Humanity (future)
- Social vouching
- Contribution history

### 4. Stablecoin Treasury
**Why**: Volatility would destroy the pool's value randomly.

**Choice**: USDC on Base (Coinbase's L2)
- Transaction fees: $0.001 - $0.01
- Backed by regulated entity (Coinbase)
- Fast growing ecosystem
- 1:1 USD peg, fully audited reserves

### 5. AI as Optional Executor
**Why**: Some edge cases need human-level judgment.

**How**: Claude API can handle:
- Complex vendor negotiations
- Receipt verification
- Dispute resolution

**Constraint**: Only used when absolutely necessary. Funded by treasury.

### 6. Self-Sustaining System 🔄
**Goal**: "Start this, walk away, it runs and changes the world on its own."

**How it funds itself**:
- **2% operational fee** on all contributions
- Covers: hosting, smart contract gas, AI API calls, emergency reserves
- Fully transparent: everyone sees where ops funds go
- If ops fund grows too large, excess returns to main treasury

**Autonomous operation**:
- Smart contracts handle 95%+ of operations
- AI handles edge cases (4%)
- Community votes on remaining rare cases (1%)
- No single human required for day-to-day operations

### 7. Fully Autonomous Moderation 🤖

**The Question**: "How do we ban trolls without employees?"

**The Answer**: The community IS the moderation team. No humans on payroll.

#### Layer 1: Economic Deterrence (Automatic)
- Post proposal: 10 USDC stake required
- Post in chat: 1 USDC stake required (or free for verified contributors)
- Get community-flagged: Lose stake

**This alone stops 90% of trolls. Real money on the line.**

#### Layer 2: Algorithmic Filters (Automatic)
Before any content goes live:
1. **Profanity filter** - Open source word list, community can update
2. **Spam detection** - Repeated messages, suspicious links, rate limiting
3. **Pattern matching** - Known scam phrases, slurs, hate speech

If flagged by algorithm → Post blocked, stake returned. No human needed.

#### Layer 3: Community Flagging (Decentralized)
```
Any member can flag content
   ↓
10 flags from unique wallets → Content auto-hidden
   ↓
25 flags → User gets a STRIKE
   ↓
3 strikes → AUTO-BAN from chat AND proposals
   ↓
(Can still vote forever - that right is permanent)
```

#### Layer 4: Appeals (Decentralized)
- Banned user creates "Appeal Proposal"
- Community votes (simple majority, 7 days)
- If passes → Ban lifted, strikes reset
- If fails → Ban stays, can appeal again in 90 days

#### The Complete Flow
```
┌─────────────────────────────────────────────────────────┐
│              CONTENT SUBMISSION FLOW                    │
│                                                         │
│  User writes message/proposal                           │
│           ↓                                             │
│  [STAKE REQUIRED] ← Economic barrier                    │
│           ↓                                             │
│  [ALGORITHM CHECK] ← Profanity, spam, patterns          │
│           ↓                                             │
│  ✓ Posted to community                                  │
│           ↓                                             │
│  [COMMUNITY FLAGS] ← Any member can flag                │
│           ↓                                             │
│  10+ flags → Content hidden                             │
│  25+ flags → User gets strike                           │
│  3 strikes → Auto-banned (chat + proposals)             │
│           ↓                                             │
│  ✓ Can still VOTE forever (permanent right)             │
└─────────────────────────────────────────────────────────┘
```

#### Why This Works Without Employees

| Component | Who/What Handles It |
|-----------|---------------------|
| Stake requirement | Smart contract |
| Profanity filter | Open source word list (community maintains) |
| Spam detection | Algorithm (rate limits, duplicate detection) |
| Community flags | Members do it themselves |
| Strike counting | Smart contract |
| Auto-ban | Smart contract executes at 3 strikes |
| Appeals | Community votes, contract executes result |

**Zero employees. Zero salaries. Zero overhead. Forever.**
- Third offense: Permanent ban from proposing (can still contribute/vote)

### 8. Charity Vetting Process ✅
**Problem**: How do we know a charity is legit and actually helps people?

**Nomination Phase**:
1. Any member can nominate a charity
2. Must provide: name, location, website, contact
3. Nominator stakes 20 USDC (refunded if approved)

**Verification Phase**:
1. **Video Application** - Charity submits 2-5 min video showing:
   - Their facility/operations
   - People they've helped (with permission)
   - How they would use donated goods
2. **Community Review** - 14-day voting period
3. **Threshold** - Need 67%+ approval from voters
4. **Background Check** - AI reviews public records, 990 forms (for US nonprofits)

**Probation Period**:
- First 3 months: max $5,000 per proposal
- Must confirm receipt of all deliveries with photos
- Community can vote to end probation early OR remove

**Removal Process**:
- Any member can propose removal
- Requires evidence (missed deliveries, fraud, etc.)
- 7-day vote, simple majority to remove
- Removed charities cannot re-apply for 1 year

**Trust Levels**:
| Level | Max Per Proposal | Requirements |
|-------|------------------|--------------|
| 🆕 New | $5,000 | Passed initial vote |
| ✅ Verified | $25,000 | 3+ successful deliveries, 90%+ rating |
| ⭐ Trusted | Unlimited | 10+ deliveries, 95%+ rating, 6+ months |

**Key Rule**: Charities apply themselves (we don't give them cash, just products). Community votes on whether to accept their application.

### 9. Chat & Community Moderation 💬
**Problem**: Community chat can have off-topic or inappropriate content.

**Solutions**:
- AI moderation for obvious violations (slurs, spam, threats)
- Community flagging system
- Temporary mutes for violations
- **But**: Never remove voting rights. Mute from chat ≠ ban from voting.

### 10. Voting Rights - Never Removed 🗳️
**Core Principle**: Once you contribute, you can ALWAYS vote. No exceptions.

If someone misbehaves, they lose proposing AND chat privileges, but **NEVER** voting rights.

| Status | Can Vote? | Can Propose? | Can Chat? |
|--------|-----------|--------------|-----------|
| Good standing | ✅ Yes | ✅ Yes | ✅ Yes |
| 1st offense (warning) | ✅ **Yes** | ⚠️ Warning | ⚠️ Warning |
| 2nd offense | ✅ **Yes** | ❌ 30-day ban | ❌ 30-day ban |
| 3rd offense | ✅ **Yes** | ❌ Permanent | ❌ Permanent |
| Banned user | ✅ **ALWAYS** | ❌ No | ❌ No |

**Why?** Your contribution gave you voting power. That's a permanent right. Being a jerk in chat doesn't take away what you paid into the system.

**Voting power expiration?** 🤔 (Open question)
- Option A: Voting power lasts forever once you contribute
- Option B: Need to contribute at least 1 USDC/year to keep voting rights
- Option C: Voting power decays slowly (like radioactivity) - need to "top up"
- **Decision**: TBD - community should vote on this

### 11. AI Concerns & Alternatives 🤖
**The worry**: "Having an AI handle this much money without control is a big trust issue"

**Valid concerns**:
- AI could be manipulated via prompt injection
- AI could hallucinate wrong decisions
- Community-voted system prompt could be gamed
- No accountability if AI makes a mistake

**Options to consider**:

| Option | Pros | Cons |
|--------|------|------|
| **A. No AI** | Maximum trust, no black box | Some edge cases can't be automated |
| **B. AI with strict limits** | Handles 90% of edge cases | Still requires trust in AI |
| **C. AI proposes, humans approve** | Best of both worlds | Slower, requires human involvement |
| **D. Multiple AI consensus** | Reduces single point of failure | More expensive, complex |

**Current recommendation**: Start with **Option A (No AI)**, add limited AI later if needed.

If we use AI:
- Maximum spending limit: $500 per AI decision
- All AI decisions publicly logged with reasoning
- Any community member can flag for human review
- 24-hour delay on AI-made decisions (allows intervention)

### 12. This Is NOT An Investment 💚

**Let's be crystal clear:**
- ❌ This is NOT "buy a coin and watch it go up"
- ❌ There is NO token to trade
- ❌ You will NOT make money from this
- ❌ This is NOT a get-rich-quick scheme

**This is for people with kind hearts who want real change in the world.**

When you contribute, your money goes to help people. Period. The "return on investment" is knowing you helped.

---

## 📦 Trustless Allocation Methods

Beyond just shipping products via Amazon, here are all the trustless ways we can allocate funds to ensure 100% goes to real help:

### Direct Product Delivery
| Vendor | What We Can Buy | Trustless Because |
|--------|----------------|-------------------|
| Amazon | Anything | Direct shipping, public tracking |
| Walmart | Groceries, supplies | Same as above |
| Costco | Bulk supplies | Same as above |
| Chewy | Pet food/supplies | Animal shelters need this! |

### Digital Delivery
| Method | What It Does | Trustless Because |
|--------|--------------|-------------------|
| Gift Cards (digital) | Grocery, essentials | Sent directly to verified email, instant |
| Transit Passes | Bus/subway passes | Purchased via city transit APIs |
| Meal Delivery | DoorDash/UberEats | Meals to homeless individuals |

### Direct Bill Pay
| Type | How It Works | Trustless Because |
|------|--------------|-------------------|
| Medical Bills | Pay hospital directly via portal | Proof of payment, no cash to patient |
| Tuition | Pay school directly | Scholarship never touches student wallet |
| Rent | Pay landlord via Plastiq/similar | Prevents misuse of funds |
| Utilities | Pay electric/water directly | Same as above |

### Key Principle: **Never cash, always services/products**

We don't give anyone money. We pay for things on their behalf. This ensures funds are used for their stated purpose.

---

## 🏠 Thinking Even Bigger: Housing & Land

> *"If this gets big enough, I want to actually solve the world's problems with this."*

Housing is hard because it requires legal ownership. But there are still trustless ways to help:

### Immediate Solutions (Can Do Now)

| Method | How It Works | Trustless? |
|--------|--------------|------------|
| **Hotel Vouchers** | Book rooms via Booking.com API | ✅ Yes - prepaid, no cash |
| **Rent Payment** | Pay landlord directly via Plastiq | ✅ Yes - proof of payment |
| **Utility Bills** | Keep people in homes by paying bills | ✅ Yes - direct payment |
| **Construction Materials** | Order lumber from Home Depot | ✅ Yes - ships directly |

### Medium-Term Solutions (Needs Partnerships)

| Method | How It Works | Challenge |
|--------|--------------|-----------|
| **Tiny Home Kits** | Amazon sells prefab tiny homes ($5-20k) | Need land to put them on |
| **Mobile Homes** | Can be purchased and delivered | Same - land needed |
| **Container Homes** | Shipping containers converted to homes | Partnership with builders |
| **Habitat for Humanity** | We fund materials, they build | Partnership needed |

### Long-Term Vision (When Treasury Is Large)

| Method | How It Works | Requirements |
|--------|--------------|--------------|
| **Community Land Trust** | DAO buys land, holds in trust | Legal entity (LLC or nonprofit) |
| **Bulk Land Purchase** | Buy cheap rural land, develop for housing | Significant capital ($1M+) |
| **Partner with Developers** | Fund affordable housing projects | Trust in partner |

### The Land Trust Model

If Charity Protocol grows large enough:

1. **Create a legal entity** (Wyoming DAO LLC or nonprofit)
2. **DAO votes to purchase land** (cheap rural/industrial zones)
3. **Land held in trust** - never sold, only used for housing
4. **Place tiny homes/mobile homes on the land**
5. **People live rent-free or very low-cost**

The land is **never sold** — it's held permanently for the community. This is how community land trusts work.

### What We Can Do TODAY

Even before getting to land/housing, we can:
- ✅ Pay rent to prevent evictions
- ✅ Pay utility bills to keep people housed
- ✅ Book hotel rooms for emergency shelter
- ✅ Order sleeping bags, tents for immediate need
- ✅ Fund Habitat for Humanity builds (materials only)

**Start small. Prove the model works. Scale to housing.**

---

## ⚠️ Edge Cases & Attack Vectors

Complete transparency means telling you how this could go wrong:

### Smart Contract Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| Code vulnerability | High | Professional audit, bug bounty program |
| Upgrade attack | High | No upgrade capability (by design) |
| Gas price spike | Medium | Ops fund covers gas, can adjust fee % |

### Vendor Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| Vendor address change | Medium | 67% vote + 7-day delay to update |
| Vendor stops accepting crypto | Medium | Multiple vendors, community can add new ones |
| Vendor collusion with attacker | Low | Major vendors have reputation to protect |

### Community Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| Sybil attack (fake accounts) | High | Quadratic voting, Proof of Humanity (future) |
| Whale manipulation | Medium | Quadratic voting limits power |
| Coordinated voting attack | Medium | 7-day voting windows, transparent history |
| Proposal spam | Low | 10 USDC stake requirement |

### Charity Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| Charity resells products | Medium | Community can vote to remove, probation period |
| Fake charity application | Medium | Video verification, 67% approval threshold |
| Charity closes down | Low | Products already delivered, no ongoing dependency |

### External Risks
| Risk | Severity | Mitigation |
|------|----------|------------|
| USDC depeg | Medium | Using most regulated stablecoin available |
| Regulatory shutdown | Medium | Comply with laws, transparent operation |
| Base network issues | Low | Coinbase-backed, growing ecosystem |
| Frontend hijacking | Medium | Official domain, contract address verification |

### What We CAN'T Prevent
- If Amazon/Walmart themselves become untrustworthy (extremely unlikely)
- Fundamental smart contract vulnerabilities we haven't found
- Black swan crypto events (entire ecosystem collapses)

**Our approach**: Be transparent about risks. Don't pretend they don't exist.

### Voting Attack Edge Cases (Critical to Address)
| Edge Case | Description | Priority | Mitigation |
|-----------|-------------|----------|------------|
| **Flash Loan Attack** | Borrow millions, contribute, vote, return loan in one tx | 🔴 Critical | Voting power locked for 7 days after contribution |
| **Sybil Attack** | Create 100 wallets with $100 each to game quadratic voting | 🔴 Critical | Proof of Humanity/passport verification (future) |
| **Vote Buying** | Pay people off-chain to vote a certain way | 🟠 High | Can't fully prevent, transparent voting helps |
| **Last-Minute Manipulation** | Swing votes in final hour | 🟡 Medium | 24-hour "no voting" period before close |
| **Voter Apathy** | Nobody votes, proposals never pass | 🟡 Medium | Auto-pass if >50% yes after 7 days minimum |
| **Tied Vote** | Exactly 50/50 | 🟢 Low | Proposal fails on tie (conservative default) |

### Smart Contract Edge Cases
| Edge Case | Description | Priority | Mitigation |
|-----------|-------------|----------|------------|
| **Reentrancy** | Drain funds via recursive calls | 🔴 Critical | Checks-effects-interactions pattern, ReentrancyGuard |
| **Integer Overflow** | Math errors with large numbers | 🔴 Critical | Solidity 0.8+ has built-in overflow checks |
| **Front-running** | Miners/validators extract value | 🟠 High | Use commit-reveal voting scheme |
| **Upgrade Attack** | Malicious contract upgrade | 🔴 Critical | NO UPGRADES - contract is immutable by design |
| **Gas Griefing** | Make functions too expensive to call | 🟡 Medium | Gas-efficient code, ops fund covers gas |

### Vendor/Execution Edge Cases
| Edge Case | Description | Priority | Mitigation |
|-----------|-------------|----------|------------|
| **Amazon Account Banned** | Lose ability to order | 🟠 High | Multiple vendor accounts, multiple vendors |
| **Price Increase** | Product costs more than approved | 🟡 Medium | 10% buffer in proposal, or auto-fail if over |
| **Out of Stock** | Product unavailable | 🟡 Medium | Refund to treasury, re-propose |
| **Wrong Address** | Shipped to wrong place | 🟡 Medium | Charity confirms address before execution |
| **Package Stolen** | Delivered but stolen | 🟡 Medium | Require signature, photo confirmation |

### Legal/Regulatory Edge Cases
| Edge Case | Description | Priority | Mitigation |
|-----------|-------------|----------|------------|
| **Securities Classification** | Token deemed security | 🟡 N/A | No token! USDC only, no investment returns |
| **Money Transmission Laws** | Classified as money transmitter | 🟠 High | Legal review, may need state licenses |
| **OFAC Sanctions** | Can't send to certain countries | 🟠 High | Whitelist charities in allowed jurisdictions only |
| **Tax Implications** | IRS wants records | 🟡 Medium | All data exportable, contributors handle own taxes |
| **Platform Shutdown Order** | Government says stop | 🔴 Note | Decentralized - no server to shut down |

#### Detailed Legal Reasoning

**1. Securities Classification**
- **Why it matters**: The SEC has sued Ripple, Coinbase, and many others for selling unregistered securities.
- **The test**: "Is there an investment with an expectation of profit?"
- **Why Charity Protocol is SAFE**: No token exists. No profit motive. You contribute USDC → get voting power → get NOTHING back. This is a donation, not an investment. More like donating to PBS and getting a tote bag.

**2. Money Transmission Laws**
- **Why it matters**: PayPal, Venmo, Western Union need licenses in every state to "move money for others."
- **The concern**: Is Charity Protocol moving money from contributors to vendors to charities?
- **Possible defense**: Charity Protocol doesn't have a human custodian — the smart contract autonomously executes. There's no "money transmitter" because there's no person doing the transmitting.
- **Action needed**: Get legal review before launch.

**3. OFAC Sanctions**
- **Why it matters**: US Treasury's Office of Foreign Assets Control has a list of countries/entities you CANNOT send money to (North Korea, certain Russian individuals, etc.).
- **Real precedent**: Tornado Cash was sanctioned in 2022. US persons cannot use it.
- **Charity Protocol approach**: Only whitelist US-based charities initially. Expand to ally nations later. Never allow sanctioned jurisdictions.

**4. Tax Implications**
- **Why it matters**: IRS wants to know about crypto transactions.
- **Questions**: Are contributions tax-deductible? (Probably not unless 501(c)(3) status). Do contributors owe taxes? (They get nothing back, so probably no).
- **Charity Protocol approach**: All data is exportable. Contributors handle their own taxes. We're transparent about everything.

**5. Platform Shutdown Order**
- **Why it matters**: Governments have shut down BTC-e, Liberty Reserve, various exchanges.
- **Why Charity Protocol is protected**: Smart contract runs on Base/Ethereum — no central server. The website could be seized, but the contract keeps running. Anyone can interact directly via Basescan.
- **Realistic risk**: If domain is seized, casual users lose access. Power users can still use the contract directly.

### ✅ Good News: Why Charity Protocol Is Legally Safer Than Most Crypto Projects

You've **accidentally designed around many legal issues** by:

| Design Decision | Legal Benefit |
|-----------------|---------------|
| **No token** | Can't be classified as a security |
| **No profit motive** | Not an investment, just a donation |
| **Full transparency** | Nothing to hide from regulators |
| **Decentralized contract** | No server to shut down |
| **Only major vendors** | Amazon/Walmart are legit, not shady entities |
| **USDC only** | Regulated stablecoin, not random crypto |
| **Contributors get nothing back** | No "expectation of profit" = not a security |

**The bottom line**: Charity Protocol is closer to Red Cross + transparent technology than to a crypto investment scheme.

### Community Edge Cases
| Edge Case | Description | Priority | Mitigation |
|-----------|-------------|----------|------------|
| **51% Attack** | Majority colludes maliciously | 🔴 Critical | Geographic diversity, time delays on big decisions |
| **Brigading** | External group floods platform | 🟠 High | Contribution requirement to vote, stake requirement |
| **Single-Issue Capture** | Only funds one cause forever | 🟡 Medium | Encourage diversity, category limits (future) |
| **Community Dies** | Everyone leaves | 🟡 Medium | Funds remain locked, can revive anytime |

---

## 🌍 The Bigger Vision

> "If ideas like this catch on in general, I think that'd be better for the world to have all of tech using tech like this."

**This isn't just about Charity Protocol.** It's about proving a new model:

1. **Transparent by default** — All transactions public, all votes visible
2. **Community-controlled** — No billionaire CEO, no board of directors
3. **Autonomous** — Runs without employees, overhead, or bureaucracy
4. **Trustless** — Don't trust us, trust the code
5. **Direct impact** — Money → goods → people. No middlemen taking cuts.

**If this works, it can be replicated for:**
- Education funding (books, supplies direct to schools)
- Medical aid (medicine, equipment direct to clinics)
- Environmental (trees planted, cleanup supplies)
- Animal welfare (food, supplies to shelters)
- Disaster relief (emergency supplies, direct shipping)

**The goal isn't to own this idea. The goal is for this idea to spread.**

The README you're reading right now is an **open-source blueprint**. Anyone can fork it, improve it, launch their own version. If someone builds a better Charity Protocol, **that's a win**.

We're not building a company. We're building a **new way for humanity to help each other**.

---

## 🏠 Land Ownership: How DAOs Own Property

> "DAO votes to purchase land - who would own this land though?"

**The Problem:** A smart contract can't sign a deed or appear on a property title.

**The Solution:** Create a legal entity that the DAO controls.

### Legal Wrapper Options

| Option | How It Works | Pros | Cons |
|--------|--------------|------|------|
| **Wyoming DAO LLC** | Wyoming law allows LLCs controlled by smart contracts | Legally recognized, votes = decisions | Wyoming-specific |
| **Delaware LLC** | LLC with operating agreement that follows DAO votes | Most flexible, widely accepted | Needs registered agent |
| **501(c)(3) Nonprofit** | Board elected by DAO, follows votes | Tax-exempt, credibility | Stricter rules, slower |
| **Community Land Trust** | Existing structure for community-owned land | Designed for this purpose | Still needs board |

### How It Would Work

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        DAO LAND ACQUISITION FLOW                        │
│                                                                         │
│   1. Community proposes: "Buy 5 acres in Texas for $50,000"            │
│                              ↓                                          │
│   2. 67% vote passes (higher threshold for major purchases)            │
│                              ↓                                          │
│   3. Charity Protocol DAO LLC receives instruction from smart contract      │
│                              ↓                                          │
│   4. LLC purchases land with DAO treasury funds                        │
│                              ↓                                          │
│   5. Title recorded: "Charity Protocol DAO LLC"                             │
│                              ↓                                          │
│   6. Operating agreement says: "This land may NEVER be sold.           │
│      It is held in perpetuity for community housing."                  │
│                                                                         │
│   Result: DAO controls land, no individual can sell it                 │
└─────────────────────────────────────────────────────────────────────────┘
```

### Key Protections

| Question | Answer |
|----------|--------|
| Who "owns" the land? | The LLC owns it on paper |
| Who controls the LLC? | The DAO via smart contract votes |
| Can anyone sell it? | NO - operating agreement prohibits |
| Can founder take it? | NO - founder has no special rights |
| What if LLC dissolves? | Land transfers to designated land trust |

### Wyoming DAO LLC Details

Wyoming passed the **DAO Supplement Act (2021)** which allows:
- DAOs to form as LLCs
- Smart contracts to be part of operating agreement
- Algorithmic governance to be legally binding
- Members limited to governance rights (no liability)

**This is the recommended approach for Charity Protocol land ownership.**

---

## 📚 Legal Research Items (To Ponder Later)

### Wyoming DAO LLC Law
- **Bill**: Wyoming SF0038 (2021)
- **Statute**: W.S. 17-31-101 through 17-31-116
- **Key provision**: "A decentralized autonomous organization may define the rights and obligations of members through the smart contract"
- **Cost to form**: ~$100 filing fee + registered agent (~$50/year)
- **First DAO LLC**: The American CryptoFed DAO (2021)

### Other States to Watch
| State | Status | Notes |
|-------|--------|-------|
| **Tennessee** | Passed 2022 | Similar to Wyoming |
| **Utah** | Passed 2023 | "Utah DAO Act" |
| **Vermont** | 2018 | BBLLC (Blockchain-Based LLC) |
| **Marshall Islands** | 2022 | Non-profit DAO structure |
| **Colorado** | Considering | Cooperative DAO structure |

### Legal Questions to Research
1. **Tax treatment**: Is the DAO LLC taxed as partnership or corporation?
2. **Member liability**: Are contributors liable for DAO actions?
3. **Securities law**: Does voting power count as a security?
4. **Charitable status**: Can a DAO LLC also be 501(c)(3)?
5. **International**: Can non-US people participate legally?

### Useful Resources
- **a]16z Crypto**: "Legal Frameworks for DAOs" (2021)
- **LexDAO**: Open source legal templates for DAOs
- **Wyoming Secretary of State**: DAO formation documents
- **OpenLaw**: Smart contract legal agreements
- **Otonomos**: DAO legal wrapper services

### Community Land Trust Models to Study
| Organization | Model | Location |
|--------------|-------|----------|
| **Champlain Housing Trust** | Largest CLT in US | Vermont |
| **Oakland CLT** | Urban housing | California |
| **Dudley Street Neighborhood** | Community-controlled | Boston |
| **NYC Community Land Initiative** | Multi-CLT network | New York |

### Questions for a Lawyer
1. Can a Wyoming DAO LLC purchase real estate in other states?
2. What happens if DAO members are anonymous (pseudonymous wallets)?
3. How do we handle property taxes with no individual owner?
4. Can the operating agreement truly be "unmodifiable"?
5. What's the liability if donated goods cause harm?

---

## 🔐 Critical Design: The Money Lockbox

> **"I need to figure out how when I start this, I cannot get into the money. No one can. It has to be spent by proposals."**

This is THE core security design. If this fails, everything fails.

### How The Lockbox Works

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SMART CONTRACT TREASURY                         │
│                                                                         │
│   USDC goes IN ────────────────────────────────────────> ✅ Always OK   │
│                                                                         │
│   USDC goes OUT ────> ONLY to pre-approved vendor addresses:            │
│                       • Amazon Payments: 0x123...                       │
│                       • Walmart Payments: 0x456...                      │
│                       • Costco Payments: 0x789...                       │
│                                                                         │
│   ❌ BLOCKED: Any transfer to non-vendor address                        │
│   ❌ BLOCKED: Founder wallet                                            │
│   ❌ BLOCKED: Any personal wallet                                       │
│   ❌ BLOCKED: Any address not on approved vendor list                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Security Guarantees

| Question | Answer |
|----------|--------|
| Can founder withdraw? | ❌ NO - contract doesn't allow it |
| Can anyone withdraw to personal wallet? | ❌ NO - only vendor addresses |
| Can hackers steal it? | Only if they hack the smart contract itself |
| What if Amazon's address changes? | Requires community vote to update |
| What about the 2% ops fee? | Goes to separate ops contract, also lockboxed |

### The Vendor Whitelist

Only these addresses can ever receive funds:

```solidity
mapping(address => bool) public approvedVendors;

// Example vendors (would be real addresses)
approvedVendors[AMAZON_MERCHANT_SERVICES] = true;
approvedVendors[WALMART_CRYPTO_PAYMENTS] = true;
approvedVendors[COSTCO_BUSINESS] = true;

// To add new vendor: requires 67% community vote + 7-day delay
```

### Adding New Vendors

1. Someone proposes adding a vendor (e.g., "Add Target")
2. 14-day discussion period
3. 67% approval threshold
4. 7-day timelock after vote passes
5. Only then is vendor added

**Why the delays?** Gives community time to catch malicious additions.

### No Escape Hatches

**Intentionally, there is NO way to**:
- Upgrade the contract to add withdrawals
- Move funds to a different contract
- "Emergency" withdraw

Once deployed, the lockbox is permanent. This is a feature, not a bug.

### Open Source & Audited

- Smart contract code: Public on GitHub
- Verified on Basescan
- Professional audit before launch
- Bug bounty program

---

## 🏗️ Technical Architecture

### Current State: Mockup
```
doa-charity/
├── index.html      # Main page structure
├── style.css       # Core design system (dark theme, glassmorphism)
├── style-extra.css # Component styles (proposals, recipients, etc.)
├── app.js          # Interactive demo (voting, animations)
└── README.md       # This document
```

### Future State: Full Implementation

```
opentax/
├── contracts/              # Smart contracts (Solidity)
│   ├── Treasury.sol        # Pool management
│   ├── Proposals.sol       # Proposal creation/voting
│   ├── Execution.sol       # Vendor API oracle calls
│   └── Registry.sol        # Verified recipients
│
├── frontend/               # Next.js or similar
│   ├── components/
│   ├── pages/
│   └── hooks/              # Web3 wallet connections
│
├── backend/                # API layer
│   ├── vendors/            # Amazon, Walmart API integrations
│   ├── oracles/            # Chainlink or custom oracles
│   └── ai/                 # Claude API for edge cases
│
└── docs/                   # Whitepaper, specs
```

### Key Technical Components

| Component | Technology | Purpose |
|-----------|------------|---------|
| Treasury | Solidity smart contract | Hold USDC, track contributions, release on vote |
| Voting | Solidity + frontend | Quadratic calculation, snapshot voting |
| Execution | Chainlink oracles | Call external APIs (Amazon, Walmart) |
| Identity | Proof of Humanity / ENS | Prevent Sybil attacks |
| Frontend | Next.js + wagmi | Web3 wallet connection, UI |
| Stablecoin | USDC on Base | Stable value, low fees |

---

## 💰 Stablecoin Strategy

### Why Stablecoins?
- No volatility (critical for a treasury)
- Easier mental model ($100 = $100)
- Regulatory clarity (compared to other tokens)

### Recommended: USDC on Base

| Factor | Value |
|--------|-------|
| **Transaction Fee** | $0.001 - $0.01 |
| **Network** | Base (Coinbase L2) |
| **Backing** | 1:1 USD reserves, audited |
| **Issuer** | Circle (regulated) |
| **Ecosystem** | Growing fast, Coinbase integration |

### Alternatives Considered

| Stablecoin | Network | Fees | Notes |
|------------|---------|------|-------|
| USDC on Base | Base | ~$0.007 | ⭐ **Recommended** |
| USDC on Arbitrum | Arbitrum | ~$0.004 | Good alternative |
| USDT on Tron | Tron | ~$0.001 | Cheapest, but Tron concerns |
| USDC on Solana | Solana | ~$0.001 | Fast, but Solana has had outages |
| PYUSD | Solana | ~$0.001 | PayPal's coin, new |

---

## ❓ Open Questions & Future Work

### Identity & Sybil Resistance
- How to verify unique humans without friction?
- Options: Worldcoin, Proof of Humanity, social vouching, government ID
- Trade-off: Privacy vs. security

### Vendor Integrations
- Amazon API for direct ordering (possible via affiliate/business accounts?)
- Walmart, Costco, direct suppliers
- Need: Business relationships or oracle solutions

### Services vs. Goods
- Goods are easy (ship coats) — services are hard (pay rent, medical bills)
- Possible: Escrow + proof of payment + verification
- Need: More research on service-based proposals

### Legal Structure
- Is this a DAO? A nonprofit? Something new?
- Tax implications for contributors?
- Need: Legal advice

### Scaling
- Start local (Seattle) → Go global
- How to maintain quality as recipient list grows?
- Regional chapters with local knowledge?

### Governance Evolution
- Who can modify the smart contracts?
- Upgrade mechanisms?
- Emergency shutdown procedures?

---

## 🌐 Similar Projects & Differentiation

### Existing Projects

| Project | What It Does | How We're Different |
|---------|--------------|---------------------|
| **Gitcoin** | Quadratic funding for crypto projects | We focus on **real-world causes**, not crypto |
| **Giveth** | Charity donations with matching | We ship **goods**, not cash |
| **Optimism RetroPGF** | Retroactive funding for impact | We fund **proactively**, voting first |
| **MolochDAO** | Grants for Ethereum development | We're for **normies**, not devs |
| **Boulder QF Pilot** | City-run quadratic funding | We're **decentralized**, not government |

### Our Unique Position

**"A Gitcoin for regular people, funding real-world causes, with automated trustless execution"**

Key differentiators:
1. **Goods, not cash** — removes charity waste
2. **Normie UX** — not just for crypto natives
3. **Auto-execution** — no humans touch the money
4. **Verified recipient registry** — curated trust

---

## 🚀 Running the Mockup

### Quick Start
1. Open `index.html` in a browser
2. That's it! It's a static mockup.

### What You Can Do
- Click **Vote Yes/No** buttons (votes update!)
- Click **Create New Proposal** (modal opens)
- Scroll through all sections
- Watch treasury balance animate slightly

### Files

| File | Description |
|------|-------------|
| `index.html` | Main HTML structure |
| `style.css` | Design system: colors, typography, base components |
| `style-extra.css` | Component styles: proposals, recipients, chat |
| `app.js` | Demo interactivity: voting, rendering, animations |

---

## 📝 Development Roadmap

### Phase 1: Concept ✅
- [x] Define core concept
- [x] Research existing solutions
- [x] Choose stablecoin (USDC on Base)
- [x] Design mockup

### Phase 2: MVP (Next)
- [ ] Deploy treasury smart contract (testnet)
- [ ] Basic proposal/voting system
- [ ] Wallet connection (wagmi)
- [ ] Manual execution (admin triggers orders)

### Phase 3: Automation
- [ ] Vendor API integrations
- [ ] Oracle-based execution
- [ ] Package tracking integration
- [ ] Photo proof of delivery

### Phase 4: Scale
- [ ] Identity/Sybil solution
- [ ] Mobile app
- [ ] More vendors
- [ ] Regional expansion

---

## 🤝 Contributing

This is an open concept. Ideas welcome!

### Core Principles (Non-Negotiable)
1. **Transparency** — all transactions public
2. **No plutocracy** — diminishing returns on voting power
3. **Goods over cash** — maximize direct impact
4. **Trustless execution** — minimize human touchpoints

---

## 📞 Contact

This project is in early concept phase. Built with care by a human + Claude.

---

*"Finally, a system I can trust with my donations."* — Future user

---

**License**: Open source. Help people. Don't be evil.
