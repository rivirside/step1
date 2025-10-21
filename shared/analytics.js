/**
 * Analytics Helper - Centralized event tracking for Google Analytics
 * 
 * This module provides easy-to-use functions for tracking user interactions
 * across the Step 1 explorers (medications and conditions).
 */

/**
 * Track when a user views an entity (drug, condition, class, etc.)
 */
export function trackEntityView(type, entityName, entityId) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'view_item', {
        item_category: type,  // 'drug', 'condition', 'pharma-class', etc.
        item_name: entityName,
        item_id: entityId
    });
}

/**
 * Track when a user performs a search
 */
export function trackSearch(query, resultCount) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'search', {
        search_term: query,
        search_results: resultCount
    });
}

/**
 * Track when a user clicks a cross-link (medications ↔ conditions)
 */
export function trackCrossLink(fromType, fromId, toType, toId, linkType) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'cross_link_click', {
        from_type: fromType,      // 'drug' or 'condition'
        from_id: fromId,
        to_type: toType,          // 'condition' or 'drug'
        to_id: toId,
        link_type: linkType       // 'acute', 'chronic', 'contraindicated'
    });
}

/**
 * Track when a user expands/collapses tree nodes
 */
export function trackTreeInteraction(action, nodeType, nodeName) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'tree_interaction', {
        action: action,           // 'expand' or 'collapse'
        node_type: nodeType,      // 'system', 'category', 'class', etc.
        node_name: nodeName
    });
}

/**
 * Track when a user clicks on a multi-class badge
 */
export function trackMultiClassBadgeClick(drugName, className) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'multi_class_badge_click', {
        drug_name: drugName,
        class_name: className
    });
}

/**
 * Track tooltip hovers (for inline cross-links)
 */
export function trackTooltipView(tooltipType, targetName) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'tooltip_view', {
        tooltip_type: tooltipType,  // 'drug' or 'condition'
        target_name: targetName
    });
}

/**
 * Track when users navigate between explorers
 */
export function trackExplorerSwitch(fromExplorer, toExplorer) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'explorer_switch', {
        from: fromExplorer,  // 'medications' or 'conditions'
        to: toExplorer
    });
}

/**
 * Track session engagement milestones
 */
export function trackEngagement(milestoneType, value) {
    if (typeof gtag !== 'function') return;
    
    gtag('event', 'engagement', {
        milestone_type: milestoneType,  // 'items_viewed', 'searches_performed', etc.
        value: value
    });
}
