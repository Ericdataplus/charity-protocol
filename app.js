// ============================================
// OpenCharity - Interactive Demo Application
// ============================================

// Sample Data
const proposals = [
    {
        id: 24,
        title: "Emergency Blankets for Seattle Homeless Shelters",
        description: "Purchase 500 emergency thermal blankets via Amazon and ship directly to DESC (Downtown Emergency Service Center).",
        amount: 3750,
        recipient: "DESC Seattle",
        vendor: "Amazon",
        yesVotes: 892,
        noVotes: 329,
        status: "voting",
        timeRemaining: "2 days, 14 hours"
    },
    {
        id: 25,
        title: "Hygiene Kits for Ballard Food Bank",
        description: "Order 300 complete hygiene kits (soap, shampoo, toothbrush, toothpaste, deodorant) from Walmart.",
        amount: 2400,
        recipient: "Ballard Food Bank",
        vendor: "Walmart",
        yesVotes: 1024,
        noVotes: 127,
        status: "voting",
        timeRemaining: "5 days, 8 hours"
    },
    {
        id: 23,
        title: "Winter Coats for Homeless Youth",
        description: "200 Columbia winter coats shipped to YouthCare Seattle for homeless youth ages 12-24.",
        amount: 8200,
        recipient: "YouthCare Seattle",
        vendor: "Amazon",
        status: "executing",
        trackingNumber: "1Z999AA10123456784",
        executionStep: 3
    }
];

const recipients = [
    {
        name: "Ballard Food Bank",
        location: "Seattle, WA",
        description: "Community food bank providing groceries, meals, and support services to neighbors in need.",
        received: 12400,
        deliveries: 8,
        approval: 98,
        verified: true
    },
    {
        name: "DESC Seattle",
        location: "Seattle, WA",
        description: "Downtown Emergency Service Center - housing and services for homeless individuals.",
        received: 8750,
        deliveries: 5,
        approval: 96,
        verified: true
    },
    {
        name: "YouthCare",
        location: "Seattle, WA",
        description: "Ending youth homelessness through housing, education, and employment services.",
        received: 15200,
        deliveries: 12,
        approval: 99,
        verified: true
    },
    {
        name: "Mary's Place",
        location: "Seattle, WA",
        description: "Emergency family shelter providing safe housing for families with children.",
        verified: false,
        reviewProgress: 67,
        reviewVotes: 203
    }
];

// Chat messages organized by channel
const channelMessages = {
    'general': [
        { user: "sarah.eth", text: "Just voted yes on the blanket proposal! Really glad we're helping DESC 🙏", time: "2m ago", avatar: "🌻" },
        { user: "mike_contributor", text: "This community is incredible. Never thought I'd see charity work like this.", time: "8m ago", avatar: "🔵" },
        { user: "jenny_seattle", text: "Good morning everyone! Any exciting proposals today?", time: "15m ago", avatar: "💜" },
        { user: "transparencyFan", text: "I just exported the data and verified everything. This is the future of giving! 🤯", time: "22m ago", avatar: "🔍" },
        { user: "charity_volunteer", text: "I work at Ballard Food Bank - we received the supplies last week! Thank you all 🙏", time: "45m ago", avatar: "💚" },
        { user: "anon_giver", text: "Donated my first $50 today. Feels good knowing exactly where it goes.", time: "1h ago", avatar: "⭐" }
    ],
    'proposals': [
        { user: "opencharity_bot", text: "📋 New Proposal #25: School Supplies for Seattle Public Schools - $4,200", time: "1m ago", avatar: "🤖", isBot: true },
        { user: "proposal_reviewer", text: "Proposal #25 looks solid. Verified the school and their needs. Voting YES.", time: "5m ago", avatar: "✅" },
        { user: "skeptic_sam", text: "Has anyone verified the vendor pricing on #25? Want to make sure we're not overpaying.", time: "12m ago", avatar: "🤔" },
        { user: "sarah.eth", text: "I checked - Amazon prices are actually lower than retail. Good deal 👍", time: "15m ago", avatar: "🌻" },
        { user: "opencharity_bot", text: "⏰ Proposal #24 voting ends in 2 days. Currently at 73% YES.", time: "30m ago", avatar: "🤖", isBot: true },
        { user: "data_analyst", text: "Running the numbers on #24... cost per blanket is $7.50, that's 30% below market. Solid proposal.", time: "45m ago", avatar: "📊" }
    ],
    'recipients': [
        { user: "opencharity_bot", text: "🏛️ New charity application: Seattle Children's Hospital Foundation", time: "3h ago", avatar: "🤖", isBot: true },
        { user: "charity_verifier", text: "I verified Ballard Food Bank in person. They're legit - toured the facility. Voting YES.", time: "5h ago", avatar: "✅" },
        { user: "jenny_seattle", text: "Has anyone had direct contact with DESC Seattle? Their impact reports look amazing.", time: "8h ago", avatar: "💜" },
        { user: "desc_outreach", text: "@jenny_seattle I'm from DESC! Happy to answer any questions about our work.", time: "8h ago", avatar: "💙" },
        { user: "skeptic_sam", text: "How do we know charities won't resell the goods we send them?", time: "1d ago", avatar: "🤔" },
        { user: "sarah.eth", text: "@skeptic_sam We require delivery photo confirmation + they're on probation for first 3 deliveries", time: "1d ago", avatar: "🌻" },
        { user: "foodbank_director", text: "We love this model! So much more efficient than traditional donation processing.", time: "2d ago", avatar: "🍎" }
    ],
    'introductions': [
        { user: "new_contributor", text: "Hi everyone! 👋 I'm Alex from Portland. Heard about OpenCharity on Twitter. Excited to be here!", time: "10m ago", avatar: "🌟" },
        { user: "jenny_seattle", text: "@new_contributor Welcome Alex! Check out the About tab to learn how it all works.", time: "12m ago", avatar: "💜" },
        { user: "crypto_philanthropy", text: "Hey all! I run a small crypto education nonprofit. Love what you're building here.", time: "2h ago", avatar: "📚" },
        { user: "anon_giver", text: "Just a regular person who wants to help. Contributed $100. Hoping to make a difference.", time: "5h ago", avatar: "⭐" },
        { user: "sarah.eth", text: "@anon_giver Every contribution counts! Welcome to the community 💚", time: "5h ago", avatar: "🌻" },
        { user: "local_volunteer", text: "I volunteer at Mary's Place. Would love to help get them verified on OpenCharity!", time: "1d ago", avatar: "🏠" },
        { user: "tech_builder", text: "Software engineer here. Love the transparency. Happy to help review the smart contracts.", time: "2d ago", avatar: "💻" },
        { user: "mike_contributor", text: "Welcome everyone! This community grows every day. So glad you're all here!", time: "2d ago", avatar: "🔵" }
    ]
};

// Current active channel
let currentChannel = 'general';

// ============================================
// Render Functions
// ============================================

function renderProposals() {
    const container = document.getElementById('proposals-list');
    if (!container) return;

    container.innerHTML = proposals.map(p => {
        const totalVotes = (p.yesVotes || 0) + (p.noVotes || 0);
        const yesPercent = totalVotes > 0 ? Math.round((p.yesVotes / totalVotes) * 100) : 0;

        if (p.status === 'executing') {
            return `
                <div class="proposal-card executing">
                    <div class="proposal-header">
                        <span class="proposal-id">#${p.id}</span>
                        <span class="proposal-status executing">Executing</span>
                    </div>
                    <h3 class="proposal-title">${p.title}</h3>
                    <p class="proposal-description">${p.description}</p>
                    <div class="proposal-details">
                        <div class="detail-item">
                            <span class="detail-label">Amount</span>
                            <span class="detail-value">$${p.amount.toLocaleString()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Recipient</span>
                            <span class="detail-value verified">${p.recipient} ✓</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Vendor</span>
                            <span class="detail-value">${p.vendor}</span>
                        </div>
                    </div>
                    <div class="execution-status">
                        <div class="execution-step completed"><span class="step-check">✓</span><span>Vote Passed (94%)</span></div>
                        <div class="execution-step completed"><span class="step-check">✓</span><span>Funds Released</span></div>
                        <div class="execution-step active"><span class="step-spinner"></span><span>Order Placed - Shipping</span></div>
                        <div class="execution-step pending"><span class="step-pending">○</span><span>Delivery Confirmation</span></div>
                    </div>
                    <a href="#" class="tracking-link">📦 Track Package: ${p.trackingNumber}</a>
                </div>
            `;
        }

        return `
            <div class="proposal-card">
                <div class="proposal-header">
                    <span class="proposal-id">#${p.id}</span>
                    <span class="proposal-status voting">Voting Open</span>
                </div>
                <h3 class="proposal-title">${p.title}</h3>
                <p class="proposal-description">${p.description}</p>
                <div class="proposal-details">
                    <div class="detail-item">
                        <span class="detail-label">Amount</span>
                        <span class="detail-value">$${p.amount.toLocaleString()}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Recipient</span>
                        <span class="detail-value verified">${p.recipient} ✓</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Vendor</span>
                        <span class="detail-value">${p.vendor}</span>
                    </div>
                </div>
                <div class="proposal-voting">
                    <div class="vote-bar">
                        <div class="vote-yes" style="width: ${yesPercent}%"></div>
                    </div>
                    <div class="vote-stats">
                        <span class="vote-yes-text">${yesPercent}% Yes (${p.yesVotes.toLocaleString()} votes)</span>
                        <span class="vote-no-text">${100 - yesPercent}% No (${p.noVotes.toLocaleString()} votes)</span>
                    </div>
                </div>
                <div class="proposal-timer">
                    <span class="timer-icon">⏱</span>
                    <span>${p.timeRemaining} remaining</span>
                </div>
                <div class="proposal-actions">
                    <button class="btn btn-vote-yes" onclick="vote(${p.id}, 'yes')">Vote Yes</button>
                    <button class="btn btn-vote-no" onclick="vote(${p.id}, 'no')">Vote No</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderRecipients() {
    const container = document.getElementById('recipients-list');
    if (!container) return;

    container.innerHTML = recipients.map(r => {
        if (!r.verified) {
            return `
                <div class="recipient-card applying">
                    <div class="recipient-pending">⏳ Under Review</div>
                    <h3 class="recipient-name">${r.name}</h3>
                    <p class="recipient-location">📍 ${r.location}</p>
                    <p class="recipient-description">${r.description}</p>
                    <div class="recipient-review">
                        <p>Community review in progress</p>
                        <div class="review-progress">
                            <div class="progress-bar" style="width: ${r.reviewProgress}%"></div>
                        </div>
                        <span class="review-votes">${r.reviewProgress}% approval (${r.reviewVotes} votes)</span>
                    </div>
                </div>
            `;
        }

        return `
            <div class="recipient-card">
                <div class="recipient-verified">✓ Verified</div>
                <h3 class="recipient-name">${r.name}</h3>
                <p class="recipient-location">📍 ${r.location}</p>
                <p class="recipient-description">${r.description}</p>
                <div class="recipient-stats">
                    <div class="recipient-stat">
                        <span class="stat-value">$${r.received.toLocaleString()}</span>
                        <span class="stat-label">Received</span>
                    </div>
                    <div class="recipient-stat">
                        <span class="stat-value">${r.deliveries}</span>
                        <span class="stat-label">Deliveries</span>
                    </div>
                    <div class="recipient-stat">
                        <span class="stat-value">${r.approval}%</span>
                        <span class="stat-label">Approval</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderChat() {
    const container = document.getElementById('chat-messages');
    if (!container) return;

    const messages = channelMessages[currentChannel] || channelMessages['general'];

    container.innerHTML = messages.map(m => `
        <div class="chat-message ${m.isBot ? 'bot-message' : ''}">
            <span class="chat-avatar">${m.avatar || '👤'}</span>
            <div class="chat-content">
                <div class="chat-header">
                    <span class="chat-user">${m.user}</span>
                    <span class="chat-time">${m.time}</span>
                </div>
                <span class="chat-text">${m.text}</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// Interactive Functions
// ============================================

function vote(proposalId, type) {
    const proposal = proposals.find(p => p.id === proposalId);
    if (!proposal) return;

    if (type === 'yes') {
        proposal.yesVotes += Math.floor(Math.random() * 5) + 1;
    } else {
        proposal.noVotes += Math.floor(Math.random() * 3) + 1;
    }

    renderProposals();
    showNotification(`Vote recorded for Proposal #${proposalId}!`);
}

// ============================================
// Tab Navigation
// ============================================

function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Update nav tab buttons
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tabName) {
            btn.classList.add('active');
        }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Re-render content for the tab if needed
    if (tabName === 'proposals') renderProposals();
    if (tabName === 'recipients') renderRecipients();
    if (tabName === 'community') renderChat();
}

// Initialize tab click handlers
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            // Skip dropdown toggle (it has no data-tab or is inside nav-dropdown)
            if (btn.classList.contains('nav-dropdown-toggle')) return;
            if (!btn.dataset.tab) return;
            showTab(btn.dataset.tab);
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Community channel click handlers
    document.querySelectorAll('.channel').forEach(channel => {
        channel.addEventListener('click', () => {
            document.querySelectorAll('.channel').forEach(c => c.classList.remove('active'));
            channel.classList.add('active');

            // Get channel ID from the channel text
            const channelText = channel.textContent.trim();
            // Map channel names to channel IDs
            const channelMap = {
                '# general': 'general',
                '# proposals': 'proposals',
                '# recipients': 'recipients',
                '# introductions': 'introductions'
            };
            currentChannel = channelMap[channelText] || 'general';

            // Update channel header
            const channelHeader = document.querySelector('.channel-name');
            if (channelHeader) {
                channelHeader.textContent = channelText;
            }

            // Re-render chat with new channel's messages
            renderChat();

            showNotification(`Switched to ${channelText}`);
        });
    });

    // Dropdown item click handlers
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
            showTab(item.dataset.tab);
        });
    });
});

// ============================================
// Modal Functions
// ============================================

function openProposalModal() {
    const modal = document.getElementById('proposal-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeProposalModal() {
    const modal = document.getElementById('proposal-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function submitProposal(event) {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const title = form.querySelector('input[type="text"]').value;

    // Add to proposals (demo)
    proposals.unshift({
        id: 26,
        title: title,
        description: form.querySelector('textarea').value,
        amount: parseInt(form.querySelector('input[type="number"]').value),
        recipient: form.querySelectorAll('select')[0].options[form.querySelectorAll('select')[0].selectedIndex].text,
        vendor: form.querySelectorAll('select')[1].value,
        yesVotes: 1,
        noVotes: 0,
        status: "voting",
        timeRemaining: "7 days, 0 hours"
    });

    // Close modal and show notification
    closeProposalModal();
    showNotification(`Proposal "${title}" submitted successfully!`);

    // Switch to proposals tab
    showTab('proposals');

    // Reset form
    form.reset();
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProposalModal();
});

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// Treasury Animation
// ============================================

function animateTreasury() {
    const treasuryEl = document.getElementById('treasury-balance');
    if (!treasuryEl) return;

    let current = 127450;

    setInterval(() => {
        // Random small fluctuation
        current += (Math.random() - 0.3) * 50;
        current = Math.max(current, 125000);
        treasuryEl.textContent = '$' + Math.floor(current).toLocaleString();
    }, 5000);
}

// ============================================
// Smooth Scroll
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// Initialize
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    renderProposals();
    renderRecipients();
    renderChat();
    animateTreasury();
});

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ============================================
// Export Data Function
// ============================================

function exportData(format) {
    // Sample export data (in real implementation, this would come from blockchain)
    const exportData = {
        exportDate: new Date().toISOString(),
        treasury: {
            totalBalance: 127450,
            availableForProposals: 98200,
            inActiveProposals: 26700,
            operationsFund: 2550
        },
        proposals: proposals,
        recipients: recipients,
        activityLog: [
            { type: 'delivery', date: '2024-12-10T20:00:00Z', proposal: 23, description: '200 winter coats delivered to YouthCare Seattle', amount: 8200, status: 'confirmed' },
            { type: 'execution', date: '2024-12-10T17:00:00Z', proposal: 24, description: '500 emergency blankets ordered from Amazon', amount: 3750, tracking: '1Z999AA10123456785', status: 'shipping' },
            { type: 'vote', date: '2024-12-10T14:00:00Z', proposal: 24, description: 'Emergency Blankets for Seattle Homeless Shelters', result: 'passed', yesPercent: 73, totalVotes: 1221 },
            { type: 'vote', date: '2024-12-09T12:00:00Z', proposal: 21, description: 'Office supplies for unverified org', result: 'rejected', yesPercent: 32, totalVotes: 450 },
            { type: 'donation', date: '2024-12-09T10:00:00Z', wallet: '0x7a3...f42d', amount: 500 },
            { type: 'donation', date: '2024-12-08T14:00:00Z', wallet: '0x9c1...82ab', amount: 1000 },
            { type: 'delivery', date: '2024-12-07T16:00:00Z', proposal: 22, description: '300 hygiene kits delivered to DESC Seattle', amount: 1800, status: 'confirmed' }
        ],
        stats: {
            totalDonated: 127450,
            proposalsPassed: 47,
            proposalsRejected: 12,
            deliveriesConfirmed: 43
        }
    };

    if (format === 'json') {
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `opencharity-data-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showNotification('JSON data exported!');
    } else if (format === 'csv') {
        // Convert activity log to CSV
        let csv = 'Date,Type,Description,Amount,Status\n';
        exportData.activityLog.forEach(item => {
            csv += `"${item.date}","${item.type}","${item.description || ''}","${item.amount || ''}","${item.status || item.result || ''}"\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `opencharity-activity-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showNotification('CSV data exported!');
    }
}
